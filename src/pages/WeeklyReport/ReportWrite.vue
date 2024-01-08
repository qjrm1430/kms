<template>
  <div>
    <div class="">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select
          id="tabs"
          name="tabs"
          class="block w-full rounded-t-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav
          class="isolate flex divide-x divide-gray-200 rounded-t-lg shadow"
          aria-label="Tabs"
        >
          <a
            v-for="tab in tabs"
            :key="tab.name"
            :class="[
              tab.current
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700',
              'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
            ]"
            :aria-current="tab.current ? 'page' : undefined"
            @click="toggleCurrentTab(tab)"
          >
            <span>{{ tab.name }}</span>
            <span
              aria-hidden="true"
              :class="[
                tab.current ? 'bg-indigo-500' : 'bg-transparent',
                'absolute inset-x-0 bottom-0 h-0.5'
              ]"
            />
          </a>
        </nav>
      </div>
    </div>
    <component
      v-if="currentTabName === '주간보고서 (금주)'"
      :is="WeeklyReportThisWeek"
    />
    <component
      v-else-if="currentTabName === '주간보고서 (계획)'"
      :is="WeeklyReportPlan"
    />
    <component
      v-else-if="currentTabName === '업무 성과 현황'"
      :is="WorkPerformance"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import WeeklyReportThisWeek from '@/components/WeeklyReportThisWeek.vue';
import WeeklyReportPlan from '@/components/WeeklyReportPlan.vue';
import WorkPerformance from '@/components/WorkPerformance.vue';
const tabs = ref([
  { name: '주간보고서 (금주)', sub: '금주 날짜', current: true },
  { name: '주간보고서 (계획)', sub: '계획 날짜', current: false },
  { name: '업무 성과 현황', current: false }
]);

onMounted(() => {
  if (typeof window !== 'undefined') {
    const storedTabs = sessionStorage.getItem('tabs');
    if (storedTabs) {
      tabs.value = JSON.parse(storedTabs);
    }
  }
});

const toggleCurrentTab = (selectedItem: any) => {
  tabs.value.forEach((item) => {
    item.current = item.name === selectedItem.name;
  });

  if (typeof window !== 'undefined') {
    sessionStorage.setItem('tabs', JSON.stringify(tabs.value));
  }
};

const currentTabName = computed(() => {
  const activeTab = tabs.value.find((item) => item.current);
  return activeTab ? activeTab.name : '';
});
</script>
