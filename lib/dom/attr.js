/* -------------------------------------------------------------------------- */
/*                        태그 안의 비표준 속성 값 getter, setter 함수                        */
/* -------------------------------------------------------------------------- */

import { getNode } from "./getNode.js";


/**
 * 
 * @param {} node 문자타입 혹은 노드타입
 * @param {string} porp 문자타입
 * @returns 노드, 프로퍼티를 받아 해당 프로퍼티 값을 얻어오는 함수
 */
export function getAttr(node, prop){
    if(typeof node === 'string') node = getNode(node);
    if(typeof prop !== 'string') throw new Error('getAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.');

    return node.getAttribute(prop);
}


/**
 * 
 * @param {*} node 문자타입 혹은 노드타입
 * @param {string} prop 문자타입의 프로퍼티 값
 * @param {string} value 문자타입의 변경할 값
 * @returns 노드, 프로퍼티, 값을 받아 해당 프로퍼티 값을 변경하는 함수
 */
export function setAttr(node, prop, value){
    if(typeof node === 'string') node = getNode(node);
    if(typeof prop !== 'string' || typeof value !== 'string') throw new TypeError('setAttr함수의 두 번째와 세 번째 인수는 문자 타입 이어야 합니다.');
    if(!value) throw new Error('setAttr함수의 세 번째 인수는 필수 입력값 입니다.')

    return node.setAttribute(prop, value);
}