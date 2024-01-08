import { ref } from 'vue';
import _ from 'lodash';

function defineRefs(refs: any) {
  return _.chain(refs).keyBy().mapValues(ref).value();
}

export { defineRefs };
