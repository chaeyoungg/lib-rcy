/* -------------------------------------------------------------------------- */
/*                               DOM의 노드 생성하는 함수                               */
/* -------------------------------------------------------------------------- */


/**
 * 
 * @param {string} node 텍스트 타입의 자식요소
 * @param {string} context 텍스트 타입의 부모요소
 */
export function getNode(node, context = document){
    if(typeof node !== 'string' ){
        throw new Error('getNode 함수의 인수는 속성 인자를 뜻하는 문자 타입이어야 합니다.');
    }
    if(context.nodeType !== 9){
        context = document.querySelector(context);
    }
    return context.querySelector(node);
}


/**
 * 
 * @param {string} node 텍스트 타입의 자식요소
 * @param {string} context 텍스트 타입의 부모요소
 */
export function getNodes(node, context = document){
    if(typeof node !== 'string'){
        throw new Error('getNodes 함수의 인수는 문자 타입이어야 합니다.');
    }
    if(context.nodeType !== 9){
        context = document.querySelector(context);
    }
    return context.querySelectorAll(node);
}