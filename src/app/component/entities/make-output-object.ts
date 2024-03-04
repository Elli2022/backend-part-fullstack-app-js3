//src/app/component/entities/make-output-object.ts
export default function makeOutputObj() {
  function outputObj({ username, email, created, modified }) {
    // Anta att `created` och `modified` redan är i önskat format eller konvertera som nödvändigt här
    return Object.freeze({
      username,
      email,
      created: new Date(created),
      modified: new Date(modified),
    });
  }

  return Object.freeze({ outputObj });
}
