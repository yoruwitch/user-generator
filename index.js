const app = Vue.createApp({
    data() {
        return {
            firstName: "Evelyn",
            lastName: "Fernandes",
            email: "evelyn.fernandes@email.com",
            gender: "female",
            picture: "https://randomuser.me/api/portraits/women/50.jpg",
            location: { city: "Natividade", country: "Brazil" },
            birthday: "03/06/1999",
        };
    },
    methods: {
        async getUser() {
            const res = await fetch("https://randomuser.me/api");
            const { results } = await res.json();
            console.log(results);

            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
            this.location.city = results[0].location.city;
            this.location.country = results[0].location.country;
            this.birthday = this.formatDate(results[0].dob.date);
        },

        formatDate(dateString) {
            const date = new Date(dateString);
            const day = String(date.getUTCDate()).padStart(2, "0");
            const month = String(date.getUTCMonth() + 1).padStart(2, "0");
            const year = date.getUTCFullYear();
            return `${day}/${month}/${year}`;
        },
    },
});

app.mount("#app");
