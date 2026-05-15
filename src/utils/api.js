export async function api(path, options = {}){
    const res = await fetch(path,{
        headers = {"content-type": "application/json"},
        ...options
    });

    const data = await res.json().catch(() => null)
    if(!res.ok){
        const msg = data?.error || `Request failed (${res.status})`;
        throw new Error(msg);
    };

    return data;
};