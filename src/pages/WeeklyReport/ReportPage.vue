<template>
  <div>
    <div class="flex justify-between">
      <div class="min-w-0 flex-1 w-96">
        <div class="flex">
          <div class="w-96">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
              >
                <MagnifyingGlassIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                id="search"
                name="search"
                class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
                placeholder="검색어를 입력해주세요."
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
      <a
        href="/reportDetail"
        class="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700"
      >
        상세보기
      </a>
      <a
        href="/reportWrite"
        class="rounded-md ml-3 bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700"
      >
        글쓰기
      </a>
    </div>

    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    작성자
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    제목
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    날짜
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="person in paginatedData" :key="person.no">
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                  >
                    {{ person.no }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.name }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.title }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.date }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="bg-gray-100 list-style-none flex justify-center space-x-1 w-full"
            >
              <button
                v-for="page in pageCount"
                :key="page"
                @click="changePage(page)"
                class="p-1 border-gray-300 text-gray-500 hover:bg-gray-50"
              >
                {{ page }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import { ref, computed } from 'vue';

const people = ref([
  {
    no: 1,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    date: '20230101'
  },
  {
    no: 2,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    date: '20230102'
  },
  {
    no: 3,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    date: '20230103'
  },
  {
    no: 3,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    date: '20230103'
  },
  {
    no: 3,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    date: '20230103'
  },
  {
    no: 3,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    date: '20230103'
  },
  {
    no: 3,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    date: '20230103'
  },
  {
    no: 3,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    date: '20230103'
  },
  {
    no: 3,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    date: '20230103'
  },
  {
    no: 3,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    date: '20230103'
  },
  {
    no: 3,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    date: '20230103'
  },
  {
    no: 3,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    date: '20230103'
  },
  {
    no: 3,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    date: '20230103'
  },
  {
    no: 3,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    date: '20230103'
  }
]);
const perPage = 10;
const currentPage = ref(1);

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return people.value.slice(start, end);
});

const pageCount = computed(() => {
  return Math.ceil(people.value.length / perPage);
});

const changePage = (page: any) => {
  currentPage.value = page;
};
</script>
