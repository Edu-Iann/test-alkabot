export const SHOULD_RENDER = 'SHOULD_RENDER';

export const submitOptionToRender = (option) => ({
  type: SHOULD_RENDER,
  option,
});
