<template>
    <div class="card-slide">
        <slot v-bind:slide="{ items }">
            <div class="card" v-for="(item, index) in items" :key="index">
                <slot name="item" v-bind:item="item">
                    <div class="card-header">
                        <div class="card-thumbnail"></div>
                    </div>
                    <div class="card-body">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.description }}</p>
                    </div>
                    <div class="card-footer"></div>
                </slot>
            </div>
        </slot>
    </div>
</template>

<style lang="scss" src="../sass/slide.scss"></style>

<script>
    export default {
        props: {
            items: {
                default: () => {
                    return [];
                }
            }
        }
    }
</script>
