import {connection} from "next/server"
import {fetchImage} from "./fetch-images"
import {CatImage} from "./cat-image"

export default async function Home() {

  await connection();
  const image = await fetchImage();

  console.log("Home: 画像情報を取得しました", image.url);

  return <CatImage url={image.url} />;
}

