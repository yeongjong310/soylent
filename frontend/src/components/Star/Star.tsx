import React, { ReactElement } from 'react'
import { ReactComponent as Star0} from 'assets/Icon/star0.svg';
import { ReactComponent as Star50} from 'assets/Icon/star50.svg';
import { ReactComponent as Star100} from 'assets/Icon/star100.svg';

export default function Star({ percent }:{ percent: 0 | 50 | 100 }): ReactElement {
  return (
    percent === 100
    ? <Star100 />
    : percent === 50
    ?  <Star50 />
    : <Star0 />
  )
}
