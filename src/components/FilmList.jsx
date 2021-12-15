import React from 'react';

export default function FilmList({ title, box_office_total, academy_award_nominations }) {
  return (
    <div className="Film">
      <h2>{title}</h2>
      <p>Box Office Total: {box_office_total}</p>
      <p>Academy Award Nominations: {academy_award_nominations}</p>
    </div>
  );
}
