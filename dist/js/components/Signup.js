app.component('signup', {
    methods: {
        registerUser() {
            //Get data entered by user
            const name = document.getElementById('name').value;
            const lastName = document.getElementById('lastname').value;
            const country = document.getElementById('country').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            //Create the data object to send in the POST request
            const data = {
                name: name,
                last_name: lastName,
                country: country,
                email: email,
                password: password
            };

            axios.post('http://localhost/primerprueba/public/api/users/register', data)
                .then(response => {    
                    window.location.href = 'http://localhost/TheKitchen/dist/confirm.html';
                })
                .catch(error => {
                    console.error(error);

                    console.log(response);
                });
        }
    },
    template:
      /*html*/
      `<!--form-->
    <div class="container container-signup mb-5">
    <!--name-->
    <div class="m-3 p-2">
        <label class="form-label mt-3" for="name">Name</label>
        <input id="name" class="form-control mb-2" type="text" name="name">
        <!--lastname-->
        <label class="form-label" for="lastname">Lastname</label>
        <input id="lastname" class="form-control mb-2" type="text" name="lastname">
        <!--country-->
        <label class="form-label" for="country">Country</label>
        <input id="country" class="form-control mb-2" type="text" name="country">
        <!--email-->
        <label class="form-label" for="email">Email</label>
        <input id="email" class="form-control mb-2" type="email" name="email">
        <!--password-->
        <label for="password" class="form-label">Password</label>
            <input id="password" class="form-control mb-2" type="password">
            
        <!--buttons-->
        <div class="col center-button">
            <div class="">
            <div class="row center"><a class="center btn-signup-dark mt-4 mb-3 hover-grow" @click="registerUser">Sign up</a></div>
                <span class=" line-deco mb-3 mx-auto"></span>
                <div class="row center"><a href="login.html" class="center btn-signup-light mb-4 hover-grow">Log in</a></div>
            </div>
            
        </div>
    </div>
</div>`
});
