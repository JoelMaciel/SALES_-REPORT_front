interface MessageProps {
  typeColor: string;
  field?: string;
  text: string;
}

export interface Alert {
  typeColor: string;
  field?: string;
  text: string;
}

export const Message: React.FC<MessageProps> = ({ typeColor, field, text }) => {
  return (
    <article className={`message is-${typeColor}`}>
      <div className="message-body">
        {field && `${field} :`} {text}
      </div>
    </article>
  );
};
