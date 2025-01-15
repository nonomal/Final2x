/**
 * @vitest-environment jsdom
 */

import { sleep, DeepDeepSleep, getRandString, clickDebounce } from '../../src/renderer/src/utils'
import { describe, expect, it, vi } from 'vitest'

describe('Utils', () => {
  it('sleep', async () => {
    const start = new Date().getTime()
    await sleep(1010)
    const end = new Date().getTime()
    expect(end - start).toBeGreaterThanOrEqual(1000)
  })

  it('DeepDeepSleep', () => {
    const start = new Date().getTime()
    DeepDeepSleep(1010)
    const end = new Date().getTime()
    expect(end - start).toBeGreaterThanOrEqual(1000)
  })

  it('getRandString', () => {
    expect(getRandString())
  })

  it('clickDebounce', async () => {
    const fn = (): void => console.log('click')
    // spy on fn to check if it's called
    const spy = vi.spyOn(console, 'log')
    // call fn 3 times
    const debouncedFn = clickDebounce(fn, 1000)
    debouncedFn()
    debouncedFn()
    debouncedFn()
    // check if fn is called only once
    expect(spy).toHaveBeenCalledTimes(1)
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    await sleep(1000)
    debouncedFn()
    expect(spy).toHaveBeenCalledTimes(2)
  })
})
