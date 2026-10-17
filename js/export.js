export function saveBlob(blob,filename){let url=URL.createObjectURL(blob);let a=document.createElement('a');a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
export function downloadJSON(data,filename){saveBlob(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),filename);}
