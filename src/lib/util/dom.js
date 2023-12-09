export function GetBlock () {
    return Array.from(document.querySelectorAll('[section]')).map(
      (node)=>{ return {
        name: node.getAttribute('section'),
        section: node, 
        visual: document.querySelectorAll(`[visual="${node.getAttribute('section')}"]`)[0]
      }}
    );
}
export function CheckCurrentSection (block){
  for(let i=block.length-1; i>=0; i--){
    const ele = block[i].section;

    if(!ele) continue;
    if(ele.getAttribute('notexist')==='true') continue;

    const view_port_offset = ele.getBoundingClientRect();
    const top = view_port_offset.top;

    const lower_bound = window.innerHeight/parseFloat(ele.getAttribute('lower_bound'));
    if(top >= lower_bound) continue;

    return i;
  }
  return 0;
}

export function ScrollTo(element){
  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'center'
  });
}

export function UpdateVisual(block, current_i){
  if(!block[current_i]) return;

  const current_visual = block[current_i].visual;
  if(!current_visual) return;

  block.forEach(({visual})=>(visual&&visual.style.display!='none')?visual.style.display='none':null);
  current_visual.style.display = 'block';
}