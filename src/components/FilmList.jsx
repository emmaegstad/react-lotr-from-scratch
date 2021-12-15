import React from 'react';

export default function FilmList({ title, box_office_total, academy_award_nominations }) {
  //from StackOverflow
  const slugifyName = (str) => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    var to = 'aaaaeeeeiiiioooouuuunc------';
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

    return str;
  };

  return (
    <div className="Film">
      <h2>{title}</h2>
      <img src={process.env.PUBLIC_URL + '/assets/films/' + `${slugifyName(title)}` + '.jpeg'} />
      <p>Box Office Total: {box_office_total}</p>
      <p>Academy Award Nominations: {academy_award_nominations}</p>
    </div>
  );
}
