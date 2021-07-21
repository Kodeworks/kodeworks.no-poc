export function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(' ')
}
/* usage example

const VARIANT_MAPS = {
  [ThisIsConcatinated]: 'bg-red-500 text-white',
  ...
}

<button
  className={classNames(
    'this is always applied',
    VARIANT_MAPS[ThisIsConcatinated],
    isTruthy && 'this only when the isTruthy is truthy',
    active ? 'active classes' : 'inactive classes',
  )}
>
  Text
</button>
*/
