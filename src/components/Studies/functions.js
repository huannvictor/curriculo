import iconLink from "../../assets/externalLink.svg";
import certificateIcon from "../../assets/certificate.svg";

export function titleFunction(condition, entity, link, place) {
  if (condition === true) {
    return (
      <span>
        {entity}
        <a
          className="hover:underline hover:underline-offset-4 hover:decoration-brand-500 pl-1"
          href={link}
          rel="noreferrer"
          target="_blank"
        >
          {place}
        </a>
        <img
          className="inline w-[9px] ml-1"
          src={iconLink}
          alt="ícone de link externo"
        />
      </span>
    );
  } else if (condition !== true) {
    return (
      <span>
        {entity}
        <a
          className="hover:underline hover:bg-brand-300 rounded-md inline hover:decoration-brand-500"
          href={link}
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="inline px-1"
            src={certificateIcon}
            alt="ícone de certificado"
          />
        </a>
        <p>{place}</p>
      </span>
    );
  }
}

export function subjectFunction(subject) {
  if (typeof subject === "string") {
    return <p>{subject}</p>;
  } else {
    return (
      <p>
        {subject.map(item => {
          return <li key={Math.random()}>{item}</li>;
        })}
      </p>
    );
  }
}
