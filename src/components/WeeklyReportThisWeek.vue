<script setup lang="ts">
import { ref, reactive } from 'vue';
// vue3-datepicker
import Datepicker from 'vue3-datepicker';
import { ko } from 'date-fns/locale';
import { defineRefs } from '@/utils/helper';

const locale = reactive(ko);
const inputFormat = ref('yyyy-MM-dd');
const now = new Date();
const weekly = ref({
  date: {
    start: new Date(now.setDate(now.getDate() - 7)),
    end: new Date(now.setDate(now.getDate() + 14))
  },
  projectForm: [
    {
      pjSelect: '선택',
      pjProgress: '선택',
      pjNum: '',
      pjTitle: '',
      pjCont: ''
    }
  ],
  techForm: [
    {
      tcSelect: '선택',
      tcProgress: '선택',
      tcNum: '',
      tcTitle: '',
      tcCont: ''
    }
  ],
  techOrdForm: [
    {
      tnSelect: '선택',
      tnTitle: '',
      tnCont: ''
    }
  ],
  etcForm: [
    {
      etcSelect: '선택',
      etcTitle: '',
      etcCont: ''
    }
  ]
});

// Add Button
// 초기화 값 변수로 선언할 경우 Form 추가 시 중복 에러
const weeklyPjAdd = () => {
  weekly.value.projectForm.push({
    pjSelect: '선택',
    pjProgress: '선택',
    pjnum: 0,
    pjTitle: '',
    pjCont: ''
  });
};
const weeklyTcAdd = () => {
  weekly.value.techForm.push({
    tcSelect: '선택',
    tcProgress: '선택',
    gage: 0,
    tcTitle: '',
    tcCont: ''
  });
};
const weeklyTcOrdAdd = () => {
  weekly.value.techOrdForm.push({
    tnSelect: '선택',
    tnTitle: '',
    tnCont: ''
  });
};
const weeklyEtcAdd = () => {
  weekly.value.etcForm.push({
    etcSelect: '선택',
    etcTitle: '',
    etcCont: ''
  });
};

const weeklyPjDel = (index: number) => {
  weekly.value.projectForm.splice(index, 1);
};
const weeklyTcDel = (index: number) => {
  weekly.value.techForm.splice(index, 1);
};
const weeklyTcOrdDel = (index: number) => {
  weekly.value.techOrdForm.splice(index, 1);
};
const weeklyEtcDel = (index: number) => {
  weekly.value.etcForm.splice(index, 1);
};

let oldVal = '';
const inputs = defineRefs(['dp2From', 'dp2To', 'dp2']);

const setOldValue = (val: string) => {
  oldVal = val;
};

const validateFromTo = (target: string, refFrom: string, refTo: string) => {
  setTimeout(() => {
    const dpFrom = inputs[refFrom].value;
    const dpTo = inputs[refTo].value;
    // alert(dpFrom.input + ' ~ ' + dpTo.input);

    if (dpFrom.input > dpTo.input) {
      alert('Validation Error!!');

      let date = new Date();
      if (oldVal) {
        const arrOldVal = oldVal.split('-');
        date = new Date(
          Number(arrOldVal[0]),
          Number(arrOldVal[1]) - 1,
          Number(arrOldVal[2])
        );
      }
      // console.log(date);

      if (target === 'from') {
        weekly.value.date.start = date;
      } else if (target === 'to') {
        weekly.value.date.start = date;
      }
      return;
    }
  }, 10);
};
const isOpen1 = ref(false);
const isOpen2 = ref(false);
const isOpen3 = ref(false);
const isOpen4 = ref(false);
const isOpen5 = ref(false);

const selectOption1 = (index: number, option: string) => {
  weekly.value.projectForm[index].pjSelect = option;
  isOpen1.value = false;
};
const selectOption2 = (index: number, option: string) => {
  weekly.value.projectForm[index].pjProgress = option;
  isOpen2.value = false;
};
const selectOption3 = (index: number, option: string) => {
  weekly.value.techForm[index].tcSelect = option;
  isOpen3.value = false;
};
const selectOption4 = (index: number, option: string) => {
  weekly.value.techForm[index].tcProgress = option;
  isOpen4.value = false;
};
const selectOption5 = (index: number, option: string) => {
  weekly.value.techOrdForm[index].tnSelect = option;
  isOpen5.value = false;
};
const selectOption6 = (index: number, option: string) => {
  weekly.value.etcForm[index].etcSelect = option;
  isOpen5.value = false;
};

const validateInput = () => {
  if (numberInput.value < 0) {
    numberInput.value = 0;
  } else if (numberInput.value > 100) {
    numberInput.value = 100;
  }
};
</script>
<template>
  <div>
    <div class="mt-10">
      <div class="">
        <label for="first-name" class="font-bold block text-sm text-gray-700">
          금주 날짜
        </label>
        <div class="flex mt-3 grid-flow-row items-center">
          <Datepicker
            v-model="weekly.date.start"
            :ref="inputs.dp2From"
            class="p-2 inline-block rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            :locale="locale"
            :weekStartsOn="0"
            :inputFormat="inputFormat"
            @focus="setOldValue($event.target.value)"
            @update:modelValue="validateFromTo('from', 'dp2From', 'dp2To')"
          />
          <span class="mx-3"> ~ </span>
          <Datepicker
            v-model="weekly.date.end"
            :ref="inputs.dp2To"
            class="p-2 inline-block rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            :locale="locale"
            :weekStartsOn="0"
            :inputFormat="inputFormat"
            @focus="setOldValue($event.target.value)"
            @update:modelValue="validateFromTo('to', 'dp2From', 'dp2To')"
          />
        </div>
      </div>
      <div class="mt-10">
        <label for="first-name" class="font-bold block text-sm text-gray-700">
          프로젝트
        </label>
        <div
          class="flex mt-3 grid-flow-row items-center"
          v-for="(pjForm, index) in weekly.projectForm"
          :key="index"
        >
          <div class="relative inline-block text-left">
            <div>
              <button
                @click="isOpen1 = !isOpen1"
                type="button"
                class="inline-flex justify-between w-36 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                {{ weekly.projectForm[index].pjSelect }}
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.294-3.294a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              v-if="isOpen1"
              class="z-10 origin-top-right absolute left-0 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu1-item-0"
                  @click="selectOption1(index, '수행')"
                  >수행</a
                >
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu1-item-1"
                  @click="selectOption1(index, '제한')"
                  >제한</a
                >
              </div>
            </div>
          </div>
          <div class="ml-2 relative inline-block text-left">
            <div class="inline-block">
              <button
                @click="isOpen2 = !isOpen2"
                type="button"
                class="inline-flex justify-between w-36 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                {{ weekly.projectForm[index].pjProgress }}
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.294-3.294a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              v-if="isOpen2"
              class="origin-top-right absolute left-0 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu2-item-0"
                  @click="selectOption2(index, '양호')"
                  >양호</a
                >
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu2-item-1"
                  @click="selectOption2(index, '관심')"
                  >관심</a
                >
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu2-item-2"
                  @click="selectOption2(index, '문제')"
                  >문제</a
                >
              </div>
            </div>
          </div>
          <div class="ml-2 relative block w-full text-left">
            <input
              type="number"
              v-model.number="numberInput"
              @input="validateInput"
              class="rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              min="0"
              max="100"
              placeholder="0~100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
