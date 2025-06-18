function toggleTopics(subjectId) {
//This hides the topic selections
  const allTopics = document.querySelectorAll('.topics');
  allTopics.forEach(t => t.style.display = 'none');

//This shows the clicked subject's topics
  const selected = document.getElementById(subjectId + '-topics');
  if (selected) {
    selected.style.display = 'block';
  }
}
