// import { css } from '@emotion/react/macro'

/**
 * Helper for adding media queries
 *
 * Each media query assumes that the design is ONLY SCREEN
 * and with a MOBILE FIRST philosophy - `only screen and (min-width)`.
 *
 * ```
 *   import styled from '@emotion/styled/macro';
 *
 *   const EmotionComponent = styled.div`
 *     display: none;
 *
 *     ${mq.desktop`
 *       display: block;
 *     `}
 *   `;
 * ```
 *
 * The helper returns a @emotion.css object, so you
 * can also use it to create CSS mixins.
 *
 * ```
 *   import styled from '@emotion/styled/macro';
 *
 *   const cssMixin = mq.mobile`
 *     display: none;
 *   `;
 *
 *   const AnotherEmotionComponent = styled.div`
 *     display: none;
 *
 *     ${cssMixin}
 *   `;
 * ```
 *
 * Choose any of the listed breakpoints from `Styles/breakpoints` and pass
 * in a template literal of CSS rules.
//  */
// const mq = Object.keys(breakpoints).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media only screen and (min-width: ${breakpoints[label]}) {
//       ${css(...args)};
//     }
//   `;

//   return acc;
// }, {});

// export default mq;
