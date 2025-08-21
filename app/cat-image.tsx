"use client";
import { useState } from "react"
import { fetchImage } from "./fetch-images"
import styles from "./page.module.css";

type CatImageProps = {
    url: string
}

export function CatImage({ url }: CatImageProps) {

    const [imageUrl, setImageUrl] = useState(url);

    const refreshImage = async () => {
        setImageUrl("");
        const image = await fetchImage();
        setImageUrl(image.url);

    }
    return (
        <div className={styles.page}>
                <button onClick={refreshImage} className={styles.button}>One More Cat!</button>
                <div className={styles.frame}>
                    {imageUrl && <img src={imageUrl} />}
                </div>
        </div>
    )
} 