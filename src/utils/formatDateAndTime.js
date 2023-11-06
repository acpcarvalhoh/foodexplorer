function formatDateAndTime(timestamp){
    const day = String(timestamp.getDate()).padStart("0", 2);
    const month = String(timestamp.getMonth() + 1).padStart("0", 2);
    const hours = String(timestamp.getHours()).padStart("0", 2);
    const minutes = String(timestamp.getMinutes()).padStart("0", 2);

    return `${day}/${month} às ${hours}h${minutes}`;

};


export default formatDateAndTime;