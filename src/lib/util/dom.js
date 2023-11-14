export function GetSectionVisual () {
    return Object.fromEntries(
      Array.from(document.querySelectorAll('[section]')).map(
        node=>[node.getAttribute('section'), {
          section: node, 
          visual: document.querySelectorAll(`[visual="${node.getAttribute('section')}"]`)[0]
        }]
      )
    );
}

export function CheckCurrentSection(sections){
  let lower_bound = window.innerHeight / 1.8;
  
  for(let i=sections.length-1; i>=0; i--){
    const ele = sections[i];

    if(!ele) continue;
    if(ele.getAttribute('notexist')==='true') continue;

    const view_port_offset = ele.getBoundingClientRect();
    const top = view_port_offset.top;

    if(top >= lower_bound) continue;

    return i;
  }
}

export function ScrollTo(element){
  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth',
    inline: 'start',
    block: 'start'
  });
}

export function UpdateVisual(visuals, current_visual){
  visuals.forEach(v=>v.className = 'hidden');
  current_visual.className = '';
}