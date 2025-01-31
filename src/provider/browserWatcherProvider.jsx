import { useAtom } from "jotai";
import styled from "styled-components";
import { themeAtom } from "@jotai";
import { useEffect, useRef } from "react";
import { browserSize, media } from "@utiles";
import { useResizeObserver } from "@hook";

// 계산식 
const getWidhtStr = ( index=0 ) =>{
    const state = Object.keys(browserSize)
    if(window.innerWidth >= browserSize[state[index]]){
        return state[index]
    }
    if((state.length -1) === index){ return state[index] }
    else { return getWidhtStr(++index) }
}

// 브라우저 변경
function thransfromBrowser(get,set){
    set({ ...get,
        browser: getWidhtStr()
    })
}

/** 현재 브라우저의 상태를 측정하는 provider */
export function BrowserWatcherProvider({ children, }){

    const containerRef = useRef();
    const [ theme, setTheme ] = useAtom(themeAtom);
    const [ obsever ] = useResizeObserver(containerRef, obseverCallback)
    
    // 제한식
    function obseverCallback(size,setObserver){
        const state = containerRef.current.getAttribute("browser")
        if(state !== getWidhtStr()){ setObserver() } 
    }

    useEffect(()=>{
        thransfromBrowser(theme,setTheme)
    },[obsever])
    

    console.log(`현재 브라우저의 크기의 형식은 ${ theme.browser } 입니다.`)
    return(<>
        <Container
        ref={containerRef}
        browser={theme.browser}
        >
            {children}
        </Container>
        <Message>
            <a>해당 브라우저 크기는 지원하지 않습니다.</a>
            <a>가로 최소 :: {browserSize.none}px 이상</a>
        </Message>
    </>)
}

const Container = styled.div`
    width: 100%;
    height: clamp(500px,100%,100%);

    ${media.none`
        display: none;
    `}
`

const Message = styled.div`
    display: contents;
    display: none;
    ${media.none`
        display: contents;
    `}   
`