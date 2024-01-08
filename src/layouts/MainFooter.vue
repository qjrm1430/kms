<template>
  <div class="text-gray-700 p-16">
    <div class="container">
      <ul class="flex justify-center">
        <li class="w-64">
          <img
            src="@/images/withnetworks_logo.png"
            alt=""
            class="w-32 mx-auto"
          />
        </li>
        <li class="flex">
          <p>
            회사명 : 위드네트웍스 | 주소 : 서울 강서구 등촌동 633-10
            등촌지와인비즈니스센터 16~18F
            <br />이메일 : with@withnetworks.com | 전화 : 1811-8633
            <br />
            <br />COPYRIGHT ⓒ 위드네트웍스 ALL RIGHTS RESERVED.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainFooter'
});
</script>

<style scoped></style>
