<template>
<header class="flex">
    <div class ="branding flex">
        <img src = "@/assets/file-invoice-dollar-solid.png" alt="" />
    </div>
</header>
</template>

<script>
export default {
    name: "navigation-bar",
};
</script>
<style scoped>
    header {
        z-index: 99;
        background-color: #003515;
        @media only screen and (min-width: 900px) {
            min-height: 100%;
            min-width: 90px;
            flex-direction: column;
            border-radius: 0 20px 20px 0;
        }

        .branding {
            border-radius: 0 20px 20px 0;
            background-color: #38A664;
            justify-content: center;
            padding: 24px;
            flex-direction: column;
            @media only screen and (min-width: 900px) {
                width: 100%;
            }

            img {
                width: auto;
                height: 30px;
            }
        }
    }
</style>


<style></style>