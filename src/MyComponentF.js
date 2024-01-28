import React from "react";
import PropTypes from "prop-types";

// 함수형 컴포넌트
const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다 <br />
      children값은 {children}입니다. <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

// 위에 props에 값이 비어있을 때, default로 나타낼 데이터.
MyComponent.defaultProps = {
  name: "기본이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
