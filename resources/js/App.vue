<template>
    <div class="strife-app">
        <div class="navigation">
            <div class="container">
                <div class="links">
                    <router-link to="/">Homepage</router-link>
                    <router-link to="/users">Users</router-link>
                    <router-link to="/contact-us">Contact Us</router-link>
                </div>
            </div>
        </div>
        <div class="container">
            <router-view/>
        </div>
        <div class="footer">
            <div class="container">
                <div class="text-center">
                    Copyright &copy; 2021 Strife Vue. All Rights Reserved.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "App"
}
</script>