import { TunTunNotify } from "./TunTunNotify";
import { MessageBox } from "../atoms/MessageBox";

/**
 * 右側のつんつん通知と、MessageBoxをまとめたコンポーネント
 */
export const ChatMolecule = ({ messageBoxList }) => {
  return (
    <div className="ChatMolecule" style={{ width: "100%" }}>
      <div>
        {messageBoxList.map((messageBox, index) => {
          if (messageBox.message === ":tuntun:") {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "30px",
                }}
              >
                <TunTunNotify />
              </div>   
            )
          } else {
            return <MessageBox isSelf={messageBox.isSelf} message={messageBox.message} />
          }
        }
        )}
      </div>
    </div>
  );
};
