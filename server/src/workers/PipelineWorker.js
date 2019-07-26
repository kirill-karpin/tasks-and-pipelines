export default function pipelineWorker(params) {
  return new Promise((resolve) => {
    console.log('is start run', params);
    setTimeout(() => {
      console.log('is end run');
      resolve(params);
    }, params.time);
  });
}
