window.onload = ()=> {
    const calculateBtn = document.querySelector("#calculate");
    calculateBtn.addEventListener("click", calculateLove)
}

const calculateLove = ()=> {
    const yourName = document.querySelector("#your-name").value
    const crushName = document.querySelector("#crush-name").value

    if (yourName != "" && crushName != "") {
        const percentage = calculateLovePercentage(yourName, crushName);

        document.querySelector(
          "#result-msg"
        ).textContent = `${yourName} and ${crushName} have a love percentage of`;
        document.querySelector("#result-percentage").textContent = `${percentage}%`
    }
}

const calculateLovePercentage = (name1, name2) =>{
  // Combine the two names
  const combinedName = name1.trim().toLowerCase() + name2.trim().toLowerCase();

  // Generate a hash based on the combined name
  let hash = 0;
  for (let i = 0; i < combinedName.length; i++) {
    hash += combinedName.charCodeAt(i) * (i + 1);
  }

  // Calculate percentage using a modulus operation
  const lovePercentage = (hash % 100) + 1; // Ensure a value between 1 and 100

  return lovePercentage;
}

