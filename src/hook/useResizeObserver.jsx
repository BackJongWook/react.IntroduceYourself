import { useEffect, useState } from "react";

// 비교자 { 현재, 계산식 }

/**
 * ref의 객체의 크기에 따라 callback을 호출하는 함수.
 * @param { RefObject } ref 변화를 확인할 오브젝트
 * @param { function({ width:number, height:number, get:value, set:setValue }) } callBack 콜백 함수
*/
export function useResizeObserver(ref, callBack){
  const [ observerSize, setObserverSize ] = useState({
    width: 0,
    height: 0,
  })
  useEffect(()=>{
    const observer = new ResizeObserver((entries)=>{
        callBack(
          {
            width: entries[0].borderBoxSize[0].inlineSize,
            height: entries[0].borderBoxSize[0].blockSize
          },
          ()=>{ 
            setObserverSize({
              width: entries[0].borderBoxSize[0].inlineSize,
              height: entries[0].borderBoxSize[0].blockSize
            })
          }
        )
      }
    )
    observer.observe(ref.current)
    return () => { observer.disconnect(); }
  },[ref])

  return [ observerSize ]
}