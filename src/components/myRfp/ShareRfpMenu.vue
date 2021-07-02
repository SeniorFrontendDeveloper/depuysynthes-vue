<template>
  <div
    class="flex flex-col py-6 px-5 bg-white borde-2 rounded-xl w-44 space-y-4"
  >
    <div class="flex items-center text-gray-425 space-x-2">
      <svg-icon
        name="presentation"
        class="h-5 w-6"
      />
      <h1>
        <router-link
          :to="{
            name: 'slide',
            params: {
              presentationId: 'presentation1',
            },
          }"
          target="_blank"
        >
          Preview
        </router-link>
      </h1>
    </div>
    <div class="flex items-center text-gray-425 space-x-2">
      <svg-icon
        name="share"
        class="h-5 w-6"
      />
      <h1>
        <router-link
          :to="{
            name: 'builder',
            params: {
              presentationId: 'presentation1',
              slideId: 'intro'
            }
          }"
        >
          Share
        </router-link>
      </h1>
    </div>
    <div class="flex items-center text-gray-425 space-x-2">
      <svg-icon
        name="shared"
        class="h-5 w-6"
      />
      <h1>
        <router-link
          :to="{
            name: 'builder',
            params: {
              presentationId: 'presentation1',
              slideId: 'intro'
            }
          }"
        >
          Shared with
        </router-link>
      </h1>
    </div>
    <div class="flex items-center text-primary space-x-2">
      <div class="p-1 border-primary border-2 rounded-md">
        <svg-icon
          name="delete"
          class="h-5 w-6"
        />
      </div>
      <h1>Delete</h1>
    </div>
  </div>
</template>
