function getServices() {
    return new Promise((resolve) => {
        resolve(
            [
                {
                    id: 3, 
                    serviceName: 'Contact'
                },
                {
                    id: 5, 
                    serviceName: 'Message'
                },
                {
                    id: 4, 
                    serviceName: 'Mail'
                }
            ]
        );
    }); 
}

export default getServices;