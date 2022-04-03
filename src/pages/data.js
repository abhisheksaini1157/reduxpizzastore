// fetch datat from api 



export const fetchData = async () => {
    const result = await fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68');
    const data = await result.json();
    return data;
    
};


    
    