/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const env = {
  MONGODB_URI: "mongodb://localhost:27017/voyage",
  BUSAN_SURVEY_URL: "http://apis.data.go.kr/6260000/BusanTourStaticService2/getVisitorStatInfo2",
  BUSAN_RESTAURANT_URL: "http://apis.data.go.kr/6260000/FoodService/getFoodKr",
  BUSAN_SIGHTS_URL: "http://apis.data.go.kr/6260000/AttractionService/getAttractionKr",
  BUSAN_KEY: "b+MAKBPsZBYTYDT54I/a78NcwqtzNoOJzGHPGktsf3+v4mkl/K7La0oHgMA0Ii6rscA89ds8iHXUccPfNUzLrA==",
  NAVER_GEO_SEARCH_URL: "https://openapi.naver.com/v1/search/local.json",
  NAVER_CLIENT_ID: "4oiw88adxd",
  NAVER_CLIENT_SECRET: "L0mrfjH4rJFIKyvsbag2163ZlrW14aYe7zWeED4r",
  NAVER_SEARCH_CLIENT_ID: "F3c27HCdi5mnrQhIX34e",
  NAVER_SEARCH_CLIENT_SECRET: "k7VGbgkynx",
  NAVER_TAXI_SEARCH_URL: "https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving",
  NAVER_ADDR_SEARCH_URL: "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode"
};

export const survey = async () => {
  const survey = await axios.get(env.BUSAN_SURVEY_URL, {
    params: {
      serviceKey: env.BUSAN_KEY,
      numOfRows: encodeURIComponent(25),
      pageNo: encodeURIComponent(1),
      resultType: encodeURIComponent("json"),
    }
  });
  const result: any = [];
  survey.data.getVisitorStatInfo.body.items.item.forEach(async (element: any) => {    
    result.push({
      spot: element.spot,
      total: parseInt(element.teens) + parseInt(element.agetwenties) + parseInt(element.agethirties) + parseInt(element.ageforties) + parseInt(element.agefifties) + parseInt(element.agesixties),
      teen: parseInt(element.teens),
      twenty: parseInt(element.agetwenties),
      thirty: parseInt(element.agethirties),
      fourty: parseInt(element.ageforties),
      fifty: parseInt(element.agefifties),
      sixty: parseInt(element.agesixties),
    });
  });
  result.sort((a: any, b: any) => {
    return b.total - a.total;
  });

  return result;
};

export const getImgUrl = async (q: any) => {
  const { data } = await axios({
    method: "GET",
    url: "https://openapi.naver.com/v1/search/image",
    params: {
      query: q,
      display: 10,
      filter: "large"
    },
    headers: {
      "X-Naver-Client-Id": env.NAVER_SEARCH_CLIENT_ID,
      "X-Naver-Client-Secret": env.NAVER_SEARCH_CLIENT_SECRET
    }
  });

  return data.items[0].link;
};

export const search = async (locate: any) => {
  const location = await axios.get(env.NAVER_GEO_SEARCH_URL, {
    params: {
      query: locate,
      display: "5",
      start: "1",
      sort: "random"
    },
    headers: {
      "X-Naver-Client-Id": env.NAVER_SEARCH_CLIENT_ID,
      "X-Naver-Client-Secret": env.NAVER_SEARCH_CLIENT_SECRET
    }
  });
  return location.data.items;
};

export const location = async (address: any) => {
  const locationData = await axios.get(env.NAVER_ADDR_SEARCH_URL, {
    params: {
      query: address,
    },
    headers: {
      "X-NCP-APIGW-API-KEY-ID": env.NAVER_CLIENT_ID,
      "X-NCP-APIGW-API-KEY": env.NAVER_CLIENT_SECRET
    }
  });
  return locationData.data.addresses;
};

export const getAddr = async (lon: any, lat: any) => {
  const { data } = await axios.get("https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc", {
    params: {
      "coords": `${lon},${lat}`,
      "output": "json",
    },
    headers: {
      "X-NCP-APIGW-API-KEY-ID": env.NAVER_CLIENT_ID,
      "X-NCP-APIGW-API-KEY": env.NAVER_CLIENT_SECRET
    }
  });

  const region = data.results[0].region;
  const fullAddress = `${region.area1.name} ${region.area2.name} ${region.area3.name} ${region.area4.name}`;

  return fullAddress;
};

export const taxiByAddr = async (start: any, goal: any) => {
  const start_coordinate_axios = await axios.get(env.NAVER_ADDR_SEARCH_URL, {
    params: {
      query: start,
    },
    headers: {
      "X-NCP-APIGW-API-KEY-ID": env.NAVER_CLIENT_ID,
      "X-NCP-APIGW-API-KEY": env.NAVER_CLIENT_SECRET
    }
  });
  const start_coordinate = start_coordinate_axios.data.addresses;

  const goal_coordinate_axios = await axios.get(env.NAVER_ADDR_SEARCH_URL, {
    params: {
      query: goal,
    },
    headers: {
      "X-NCP-APIGW-API-KEY-ID": env.NAVER_CLIENT_ID,
      "X-NCP-APIGW-API-KEY": env.NAVER_CLIENT_SECRET
    }
  });

  const goal_coordinate = goal_coordinate_axios.data.addresses;

  const fee = await axios.get(env.NAVER_TAXI_SEARCH_URL, {
    headers: {
      "X-NCP-APIGW-API-KEY-ID": env.NAVER_CLIENT_ID,
      "X-NCP-APIGW-API-KEY": env.NAVER_CLIENT_SECRET
    },
    params: {
      start: start_coordinate[0].x + "," + start_coordinate[0].y,
      goal: goal_coordinate[0].x + "," + goal_coordinate[0].y,
      option: "trafast"
    }
  });
  // res.status(200).json();
  return fee.data.route.trafast[0].summary.taxiFare;
};