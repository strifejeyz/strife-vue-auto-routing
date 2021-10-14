<template>
    <div>
        <h1>USERS {{$route.params}}</h1>
        <div v-if="$route.params.any">
            <div v-if="typeof $route.params.any == 'number'">
                Selected User:
                {{$store.state.users.find(u=>u.id==$route.params.any).name}}
                <button @click="$router.push('/users/')">Go back</button>
            </div>
            <div v-else>
                Selected User:
                {{$store.state.users.find(u=>u.slug==$route.params.any).name}}
                <button @click="$router.push('/users/')">Go back</button>
            </div>
        </div>
        <div v-else>
            <ul>
                <li v-for="(user,key) in $store.state.users" :key="key" style="width:300px">
                    <div class="flex-between">
                        <div>{{user.name}}</div>
                        <div>
                            <button @click="$router.push('/users/'+user.id)">ID</button>
                            <button @click="$router.push('/users/'+user.slug)">SLUG</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>