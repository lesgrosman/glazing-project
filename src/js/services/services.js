/*jshint esversion: 8 */

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: data
    });

    if (!res.ok) {
        throw new Error(`Error ${res.status}`);
    }

    return await res.json();
};

export default postData;