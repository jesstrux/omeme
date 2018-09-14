import axios from "axios";

export const BASE_URL = "https://api.imgur.com/3";

export const query = (url) => {
    const promise = new Promise((resolve, reject) => {
        axios.get( url, {
            headers: {
                "Authorization": "Bearer 8116d2d1306724271652274461268adfe30927cb"
            },
        })
        .then(response => {
            resolve(response.data.data);
        })
        .catch(err => reject("Error fetching images: " + err))
    });

    return promise;
};

export const formatImages = (data) => {
    return data.images.map(i => {
        const idx = i.link.lastIndexOf(".");
        const thumb = i.link.substring(0, idx) + "m" + i.link.substring(idx);
        let h, w;

        if(i.width > i.height){
            h = 300;
            w = i.width / i.height * 300;
        }else{
            w = 300;
            h = i.height / i.width * 300 
        }

        return {
            height: i.height,
            h: h,
            width: i.width,
            w: w,
            src: i.link,
            thumb: thumb,
            size: i.size
        }
    });
}

export const formatSearchImages = (data) => {
    var valid_items = data.filter(item => item.images && item.images.length);
    var images = valid_items.map(item => item.images);

    images = images.reduce((acc, val) => acc.concat(val), []);

    return images.map(i => {
        const idx = i.link.lastIndexOf(".");
        const thumb = i.link.substring(0, idx) + "m" + i.link.substring(idx);
        let h, w;

        if(i.width > i.height){
            h = 300;
            w = i.width / i.height * 300;
        }else{
            w = 300;
            h = i.height / i.width * 300 
        }

        return {
            height: i.height,
            h: h,
            width: i.width,
            w: w,
            src: i.link,
            thumb: thumb,
            size: i.size
        }
    });
}