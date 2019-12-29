

export const fetchAllData = () => {
    return fetch("https://my12.digitalexperience.ibm.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/fa9519d5-0363-4b8d-8e1f-627d802c08a8")
    .then(response => {
        if (response.ok) {
            return response.json();
        } else{
            return {hasError: true}
        }
    })
    .catch(error => `<p>${error}</p>`)
}
