import { reportInsert } from '@/api/report';
import { useRouter } from 'vue-router';

const router = useRouter();

// 취소
const cancelConfirm = () => {
  setTimeout(() => {
    if (confirm('주간보고서 작성을 취소 하시겠습니까?')) {
      router.go(-1);
    }
  }, 500);
};

// 저장
const save = async (reporting: any) => {
  console.log('save');
  const object = JSON.parse(JSON.stringify(reporting.value));

  const jsonArray = [];
  jsonArray.push(object);

  await reportInsert(jsonArray)
    .then((res: any) => {
      console.log(res);

      // if (res) {
      //   router.go(-1);
      // } else {
      //   router.go(0);
      // }
    })
    .catch((e: Error) => {
      console.log(e);
    });
};
