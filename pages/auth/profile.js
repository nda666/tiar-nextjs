import React, { useContext } from "react";
import { UserContext } from "~/providers/users-provider";
import { Row, Col } from "antd";
import { auth } from "~/module/firebase";

const Profile = () => {
  const user = useContext(UserContext);
  const { fullName, phoneNumber, email } = user;
  return (
    <Row>
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
        <div
          style={{
            background: `url("https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
            )  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px",
          }}
          className="border border-blue-300"
        ></div>
        <div className="md:pl-4">
          <h2 className="text-2xl font-semibold">{fullName}</h2>
          <h3 className="italic">{phoneNumber}</h3>
          <h3 className="italic">{email}</h3>
        </div>
        <button
          onClick={() => {
            auth.signOut();
          }}
        >
          Sign out
        </button>
      </Col>
    </Row>
  );
};
export default Profile;
