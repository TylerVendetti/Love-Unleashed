"use client"

import { useState } from "react"

// Pet data with updated characters for both rounds
const pets = [
  {
    name: "Topo Chico",
    species: "Dachshund",
    image: "/images/topo-chico-new.png",
    bio: "A certified snuggle professional. I'll boop your nose if you boop mine. Small dog, big heart, zero stress.",
    // Matching criteria for Willow's preferences
    isSmall: true,
    isGentle: true,
    isMale: true,
    isSassy: false,
    isActive: false,
    // Keep old traits for display purposes
    traits: ["gentle", "affectionate", "calm"],
    likes: ["snuggling", "nose boops", "comfort"],
    dislikes: ["stress", "loud noises", "roughness"],
    lookingFor: "gentle",
  },
  {
    name: "Whiskers",
    species: "Persian Cat",
    image: "/placeholder.svg?height=200&width=200",
    isSmall: true,
    isGentle: true,
    isMale: false,
    isSassy: false,
    isActive: false,
    traits: ["calm", "elegant", "independent"],
    likes: ["sunbathing", "grooming", "quiet spaces"],
    dislikes: ["water", "chaos", "dogs"],
    lookingFor: "peaceful",
  },
  {
    name: "Luna",
    species: "Siamese Cat",
    image: "/placeholder.svg?height=200&width=200",
    isSmall: true,
    isGentle: false,
    isMale: false,
    isSassy: true,
    isActive: true,
    traits: ["vocal", "social", "curious"],
    likes: ["attention", "exploring", "chatting"],
    dislikes: ["being ignored", "boredom"],
    lookingFor: "talkative",
  },
  {
    name: "Charlie",
    species: "Labrador",
    image: "/placeholder.svg?height=200&width=200",
    isSmall: false,
    isGentle: true,
    isMale: true,
    isSassy: false,
    isActive: true,
    traits: ["friendly", "gentle", "patient"],
    likes: ["children", "water", "food"],
    dislikes: ["aggression", "storms"],
    lookingFor: "family-oriented",
  },
  {
    name: "Shadow",
    species: "Black Cat",
    image: "/placeholder.svg?height=200&width=200",
    isSmall: true,
    isGentle: false,
    isMale: true,
    isSassy: true,
    isActive: false,
    traits: ["mysterious", "independent", "nocturnal"],
    likes: ["nighttime", "hiding", "hunting"],
    dislikes: ["bright lights", "crowds"],
    lookingFor: "mysterious",
  },
  {
    name: "Buddy",
    species: "Beagle",
    image: "/placeholder.svg?height=200&width=200",
    isSmall: false,
    isGentle: true,
    isMale: true,
    isSassy: false,
    isActive: true,
    traits: ["curious", "friendly", "food-motivated"],
    likes: ["sniffing", "eating", "walks"],
    dislikes: ["diets", "being rushed"],
    lookingFor: "food-loving",
  },
  {
    name: "Rocky",
    species: "Bulldog",
    image: "/placeholder.svg?height=200&width=200",
    isSmall: false,
    isGentle: true,
    isMale: true,
    isSassy: false,
    isActive: false,
    traits: ["stubborn", "loyal", "calm"],
    likes: ["napping", "short walks", "comfort"],
    dislikes: ["exercise", "heat", "rushing"],
    lookingFor: "laid-back",
  },
  {
    name: "Mittens",
    species: "Tabby Cat",
    image: "/placeholder.svg?height=200&width=200",
    isSmall: true,
    isGentle: true,
    isMale: false,
    isSassy: false,
    isActive: false,
    traits: ["playful", "affectionate", "social"],
    likes: ["toys", "cuddles", "company"],
    dislikes: ["loneliness", "loud music"],
    lookingFor: "cuddly",
  },
  {
    name: "Zeus",
    species: "Great Dane",
    image: "/placeholder.svg?height=200&width=200",
    isSmall: false,
    isGentle: true,
    isMale: true,
    isSassy: false,
    isActive: false,
    traits: ["gentle", "protective", "majestic"],
    likes: ["space", "respect", "gentle play"],
    dislikes: ["small spaces", "roughness"],
    lookingFor: "respectful",
  },
  {
    name: "Coco",
    species: "Chihuahua",
    image: "/placeholder.svg?height=200&width=200",
    isSmall: true,
    isGentle: false,
    isMale: false,
    isSassy: true,
    isActive: true,
    traits: ["feisty", "loyal", "vocal"],
    likes: ["attention", "warmth", "being carried"],
    dislikes: ["cold", "big dogs", "being ignored"],
    lookingFor: "devoted",
  },
  {
    name: "Smokey",
    species: "Russian Blue",
    image: "/placeholder.svg?height=200&width=200",
    isSmall: true,
    isGentle: true,
    isMale: true,
    isSassy: false,
    isActive: false,
    traits: ["quiet", "observant", "gentle"],
    likes: ["routine", "quiet corners", "gentle pets"],
    dislikes: ["chaos", "sudden changes"],
    lookingFor: "calm",
  },
  {
    name: "Ace",
    species: "Border Collie",
    image: "/placeholder.svg?height=200&width=200",
    isSmall: false,
    isGentle: false,
    isMale: true,
    isSassy: false,
    isActive: true,
    traits: ["intelligent", "active", "focused"],
    likes: ["mental challenges", "herding", "work"],
    dislikes: ["boredom", "inactivity"],
    lookingFor: "smart",
  },
  {
    name: "Willow",
    species: "Chi-Spaniel",
    image: "/images/willow.png",
    bio: "Cozy blankets > Drama. Looking for a lap, not a lap race. ISO small bois, soft bois, and lover bois.",
    // Willow's seeking criteria
    seekingCriteria: ["SMALL", "GENTLE", "MALE"],
    isSmall: true,
    isGentle: true,
    isMale: false,
    isSassy: false,
    isActive: false,
    traits: ["docile", "affectionate", "relaxed"],
    likes: ["being held", "gentle play", "comfort"],
    dislikes: ["roughness", "stress"],
    lookingFor: "gentle",
  },
  {
    name: "Milo",
    species: "Pitbull",
    image: "/images/milo.png",
    bio: "Big boy with big feelings. I love nature and jumping and digging and bones and kisses and belly rubs and cuddles and… what were we just talking about?",
    isSmall: false,
    isGentle: true,
    isMale: true,
    isSassy: false,
    isActive: true,
    traits: ["energetic", "affectionate", "playful"],
    likes: ["nature", "jumping", "digging", "bones", "kisses", "belly rubs", "cuddles"],
    dislikes: ["being still", "quiet time", "small spaces"],
    lookingFor: "active",
  },
  {
    name: "Penny",
    species: "Calico Cat",
    image: "/images/penny.png",
    bio: "I'm spicy, I'm speedy (zoomies all day, baby), and I will swat your tail for fun. Need a partner who can keep up.",
    isSmall: true,
    isGentle: false,
    isMale: false,
    isSassy: true,
    isActive: true,
    traits: ["energetic", "playful", "feisty"],
    likes: ["zoomies", "swatting", "playing", "speed", "chaos"],
    dislikes: ["slow pace", "laziness", "quiet time"],
    lookingFor: "active",
  },
  // New characters for Round 2
  {
    name: "Boris",
    species: "Lizard",
    image: "/images/boris.png",
    bio: "Silent but deadly? I invented it. I need a sparring partner with sharp wit and sharper looks. Fast-talking, active guys who can dish it out and take it to the front, please.",
    // Boris's seeking criteria
    seekingCriteria: ["SASSY", "ACTIVE", "MALE"],
    isSmall: true,
    isGentle: false,
    isMale: true,
    isSassy: true,
    isActive: true,
    traits: ["witty", "active", "confrontational"],
    likes: ["sparring", "banter", "challenges", "sharp wit"],
    dislikes: ["laziness", "timidity", "boring conversation"],
    lookingFor: "witty",
  },
  {
    name: "Oliver",
    species: "Black Cat",
    image: "/images/oliver.png",
    bio: "I don't chase. Period. I sunbathe. I banter. I vanish into the shadows. And I'm probably cooler than you.",
    isSmall: true,
    isGentle: false,
    isMale: true,
    isSassy: true,
    isActive: true,
    traits: ["witty", "cool", "independent"],
    likes: ["banter", "sunbathing", "being mysterious", "sharp wit"],
    dislikes: ["chasing", "neediness", "crowds"],
    lookingFor: "independent",
  },
  {
    name: "Dotty",
    species: "Dachshund",
    image: "/images/dotty.png",
    bio: "I'm sweet, soft, and kinda terrified of confrontation. And everything. In fact… can we just stay inside?",
    isSmall: true,
    isGentle: true,
    isMale: false,
    isSassy: false,
    isActive: false,
    traits: ["sweet", "timid", "gentle"],
    likes: ["staying inside", "comfort", "safety", "quiet time"],
    dislikes: ["confrontation", "scary things", "going outside"],
    lookingFor: "gentle",
  },
  {
    name: "Frank",
    species: "Beagle-Mix",
    image: "/images/frank.png",
    bio: "I enjoy the finer things in life: naps, snacks, human pets, and snacks. Did I mention snacks?",
    isSmall: false,
    isGentle: true,
    isMale: true,
    isSassy: false,
    isActive: false,
    traits: ["lazy", "food-motivated", "relaxed"],
    likes: ["naps", "snacks", "pets", "comfort", "food"],
    dislikes: ["activity", "rushing", "missing meals"],
    lookingFor: "relaxed",
  },
]

interface Pet {
  name: string
  species: string
  image: string
  bio?: string
  seekingCriteria?: string[]
  isSmall: boolean
  isGentle: boolean
  isMale: boolean
  isSassy: boolean
  isActive: boolean
  traits: string[]
  likes: string[]
  dislikes: string[]
  lookingFor: string
}

export default function LoveUnleashedMobile() {
  const [gameState, setGameState] = useState<"start" | "playing" | "result" | "final" | "rules">("start")
  const [currentRound, setCurrentRound] = useState(1)
  const [totalScore, setTotalScore] = useState(0)
  const [seekingPet, setSeekingPet] = useState<Pet | null>(null)
  const [candidates, setCandidates] = useState<Pet[]>([])
  const [usedPets, setUsedPets] = useState<Pet[]>([])
  const [resultMessage, setResultMessage] = useState("")
  const [roundScore, setRoundScore] = useState(0)
  const [expandedCandidates, setExpandedCandidates] = useState<number[]>([])

  const startGame = () => {
    setGameState("playing")
    setCurrentRound(1)
    setTotalScore(0)
    setUsedPets([])
    setupRound(1, 0, [])
  }

  const toggleCandidateExpansion = (index: number) => {
    setExpandedCandidates((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const setupRound = (round: number, score: number, used: Pet[]) => {
    let newSeekingPet: Pet
    let newUsedPets: Pet[]

    if (round === 1) {
      // First round: Willow is always the seeking pet
      newSeekingPet = pets.find((pet) => pet.name === "Willow")!
      newUsedPets = [newSeekingPet]
    } else if (round === 2) {
      // Second round: Boris is always the seeking pet
      newSeekingPet = pets.find((pet) => pet.name === "Boris")!
      newUsedPets = [...used, newSeekingPet]
    } else {
      // Future rounds: random pet (excluding Willow and Boris)
      const availablePets = pets.filter((pet) => pet.name !== "Willow" && pet.name !== "Boris" && !used.includes(pet))
      newSeekingPet = availablePets[Math.floor(Math.random() * availablePets.length)]
      newUsedPets = [...used, newSeekingPet]
    }

    const remainingPets = pets.filter((pet) => !newUsedPets.includes(pet))
    const newCandidates: Pet[] = []
    const finalUsedPets = [...newUsedPets]

    // Special case: For Willow (round 1), use pre-selected matches
    if (round === 1) {
      // Pre-selected candidates for Willow
      const topoChico = pets.find((pet) => pet.name === "Topo Chico")
      const milo = pets.find((pet) => pet.name === "Milo")
      const penny = pets.find((pet) => pet.name === "Penny")

      if (topoChico) {
        newCandidates.push(topoChico)
        finalUsedPets.push(topoChico)
      }
      if (milo) {
        newCandidates.push(milo)
        finalUsedPets.push(milo)
      }
      if (penny) {
        newCandidates.push(penny)
        finalUsedPets.push(penny)
      }
    } else if (round === 2) {
      // Special case: For Boris (round 2), use pre-selected matches
      const oliver = pets.find((pet) => pet.name === "Oliver")
      const dotty = pets.find((pet) => pet.name === "Dotty")
      const frank = pets.find((pet) => pet.name === "Frank")

      if (oliver) {
        newCandidates.push(oliver)
        finalUsedPets.push(oliver)
      }
      if (dotty) {
        newCandidates.push(dotty)
        finalUsedPets.push(dotty)
      }
      if (frank) {
        newCandidates.push(frank)
        finalUsedPets.push(frank)
      }
    } else {
      // Fill remaining candidate slots randomly for other rounds
      const availableForCandidates = pets.filter((pet) => !finalUsedPets.includes(pet))
      const slotsToFill = 3 - newCandidates.length

      for (let i = 0; i < slotsToFill && availableForCandidates.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableForCandidates.length)
        newCandidates.push(availableForCandidates[randomIndex])
        finalUsedPets.push(availableForCandidates[randomIndex])
        availableForCandidates.splice(randomIndex, 1)
      }
    }

    setSeekingPet(newSeekingPet)
    setCandidates(newCandidates)
    setUsedPets(finalUsedPets)
    setExpandedCandidates([])
  }

  const calculateCompatibility = (seeking: Pet, match: Pet) => {
    if (!seeking.seekingCriteria) return 0

    let score = 0

    // Check each of the seeking pet's criteria (should be exactly 3 criteria)
    seeking.seekingCriteria.forEach((criteria) => {
      switch (criteria) {
        case "SMALL":
          if (match.isSmall) score += 1
          break
        case "GENTLE":
          if (match.isGentle) score += 1
          break
        case "MALE":
          if (match.isMale) score += 1
          break
        case "SASSY":
          if (match.isSassy) score += 1
          break
        case "ACTIVE":
          if (match.isActive) score += 1
          break
      }
    })

    // Maximum possible score per round is 3 (all 3 criteria match)
    return Math.min(score, 3)
  }

  const generateResultMessage = (score: number, seekingName: string, matchName: string, seeking: Pet, match: Pet) => {
    let explanation = ""

    if (seeking.seekingCriteria) {
      const matches: string[] = []
      const misses: string[] = []

      seeking.seekingCriteria.forEach((criteria) => {
        switch (criteria) {
          case "SMALL":
            if (match.isSmall) matches.push("small size")
            else misses.push("small size")
            break
          case "GENTLE":
            if (match.isGentle) matches.push("gentle nature")
            else misses.push("gentle nature")
            break
          case "MALE":
            if (match.isMale) matches.push("male")
            else misses.push("male")
            break
          case "SASSY":
            if (match.isSassy) matches.push("sassy attitude")
            else misses.push("sassy attitude")
            break
          case "ACTIVE":
            if (match.isActive) matches.push("active personality")
            else misses.push("active personality")
            break
        }
      })

      // Create more natural explanations based on the specific characters and scores
      if (score === 3) {
        // Perfect match
        if (seekingName === "Willow" && matchName === "Topo Chico") {
          explanation = `${matchName} is exactly what ${seekingName} is looking for - small, gentle, and a lover boy!`
        } else if (seekingName === "Boris" && matchName === "Oliver") {
          explanation = `${matchName} fits all of ${seekingName}' criteria: a fit sassy king.`
        } else {
          explanation = `${matchName} is exactly what ${seekingName} was looking for - ${matches.join(", ")}!`
        }
      } else if (score === 2) {
        // Good match - 2 out of 3
        if (seekingName === "Willow") {
          if (matchName === "Milo") {
            explanation = `${matchName} matches ${seekingName}'s need for a sweet, gentle boy. However, ${matchName} is quite big which is not ${seekingName}'s thing.`
          } else {
            explanation = `${matchName} has most of what ${seekingName} wants: ${matches.join(" and ")}. But ${matchName} ${misses.length === 1 && misses[0] === "male" ? "is female" : `doesn't have the ${misses.join(" or ")} that ${seekingName} was looking for`}.`
          }
        } else if (seekingName === "Boris") {
          explanation = `${matchName} is a guy - ${seekingName}'s preference. But... ${matchName} isn't as ${misses.join(" or ")} as ${seekingName} would like.`
        }
      } else if (score === 1) {
        // Okay match - 1 out of 3
        if (seekingName === "Willow") {
          if (matchName === "Penny") {
            explanation = `${matchName} is a smaller breed - one of ${seekingName}'s dealbreakers. However, she's also female (${seekingName} is on the hunt for boys) and a little too spicy for our sweet ${seekingName}.`
          } else {
            explanation = `${matchName} has the ${matches.join(", ")} ${seekingName} wants, but ${matchName} ${misses.includes("male") ? "is female" : `lacks the ${misses.filter((m) => m !== "male").join(" and ")}`}${misses.includes("male") ? ` and is female` : ""}.`
          }
        } else if (seekingName === "Boris") {
          if (matchName === "Frank") {
            explanation = `${matchName} is a guy - ${seekingName}' preference. But... ${matchName} isn't as sassy or active as ${seekingName} would like.`
          } else {
            explanation = `${matchName} ${matches.includes("male") ? "is a guy" : `has the ${matches.join(", ")}`} ${seekingName} likes, but ${matchName} ${misses.includes("male") ? "is female - not " + seekingName + "'s type" : `isn't ${misses.filter((m) => m !== "male").join(" or ")}`}${misses.includes("male") && misses.length > 1 ? ` and is female` : ""}.`
          }
        }
      } else {
        // Poor match - 0 out of 3
        if (seekingName === "Boris" && matchName === "Dotty") {
          explanation = `For one, ${matchName} is female - not ${seekingName}'s type. For another, ${matchName} is more shy than sassy, and prefers a couch snuggle over a grand adventure.`
        } else {
          explanation = `${matchName} ${misses.includes("male") ? "is female" : `doesn't have the ${misses.slice(0, -1).join(", ")}${misses.length > 1 ? ` or ${misses[misses.length - 1]}` : misses[0]}`} that ${seekingName} was looking for${misses.includes("male") ? `, and is female too` : ""}.`
        }
      }
    }

    const messages = {
      perfect: [
        `Perfect match! ${seekingName} and ${matchName} are exactly what each other wanted!`,
        `Flawless pairing! ${seekingName} couldn't have asked for better!`,
        `Dream come true! ${seekingName} and ${matchName} are a perfect fit!`,
      ],
      good: [
        `Great match! ${seekingName} and ${matchName} have strong compatibility!`,
        `Nice pairing! ${seekingName} is quite happy with ${matchName}!`,
        `Good chemistry! ${seekingName} and ${matchName} hit it off well!`,
      ],
      okay: [
        `Decent match! ${seekingName} and ${matchName} have some things in common!`,
        `Not bad! ${seekingName} thinks ${matchName} is alright!`,
        `Could work! ${seekingName} and ${matchName} might grow on each other!`,
      ],
      poor: [
        `Not quite right... ${seekingName} and ${matchName} don't really click!`,
        `Awkward match... ${seekingName} was hoping for something different!`,
        `Missed the mark... ${seekingName} and ${matchName} just don't fit!`,
      ],
    }

    let category: "perfect" | "good" | "okay" | "poor"
    if (score === 3)
      category = "perfect" // Perfect match: all 3 qualities
    else if (score === 2)
      category = "good" // Good match: 2 out of 3 qualities
    else if (score === 1)
      category = "okay" // Okay match: 1 out of 3 qualities
    else category = "poor" // Poor match: 0 qualities

    let mainMessage: string
    if (seekingName === "Boris" && matchName === "Oliver" && score === 3) {
      mainMessage = "A pawfect pairing!"
    } else {
      mainMessage = messages[category][Math.floor(Math.random() * messages[category].length)]
    }

    return `${mainMessage}\n\n${explanation}`
  }

  const selectMatch = (selectedPet: Pet) => {
    if (!seekingPet) return
    const compatibility = calculateCompatibility(seekingPet, selectedPet)
    const message = generateResultMessage(compatibility, seekingPet.name, selectedPet.name, seekingPet, selectedPet)
    setRoundScore(compatibility)
    setResultMessage(message)
    setGameState("result")
  }

  const nextRound = () => {
    const newTotalScore = totalScore + roundScore
    setTotalScore(newTotalScore)
    if (currentRound >= 2) {
      setGameState("final")
    } else {
      const newRound = currentRound + 1
      setCurrentRound(newRound)
      setupRound(newRound, newTotalScore, usedPets)
      setGameState("playing")
    }
  }

  const getFinalRating = (score: number) => {
    if (score >= 6) return "Legendary Matchmaker!"
    if (score >= 4) return "Professional Paw Pairer!"
    if (score >= 2) return "Still Learning!"
    return "Maybe Try a Goldfish..."
  }

  const MobilePetCard = ({
    pet,
    isCandidate,
    isExpanded = false,
    onToggleExpand,
    onClick,
  }: {
    pet: Pet
    isCandidate: boolean
    isExpanded?: boolean
    onToggleExpand?: () => void
    onClick?: () => void
  }) => (
    <div
      className={`mobile-pet-card ${isCandidate ? "candidate" : "seeking"} ${isCandidate && isExpanded ? "expanded" : ""}`}
    >
      <div className="pet-image-container">
        <img
          src={pet.image || "/placeholder.svg"}
          alt={pet.name}
          className={`pet-image ${isCandidate && isExpanded ? "expanded-image" : ""}`}
        />
      </div>
      <div className="card-header">
        <div className="pet-name">{pet.name}</div>
        <div className="pet-species">{pet.species}</div>
      </div>

      {/* Show full details for seeking pet or expanded candidates */}
      {(!isCandidate || isExpanded) && (
        <div className="card-content">
          {pet.bio ? (
            <div className="pet-bio">{pet.bio}</div>
          ) : (
            <>
              <div className="trait-row">
                <span className="label">Personality:</span>
                <span className="value">{pet.traits.join(", ")}</span>
              </div>
              <div className="trait-row">
                <span className="label">Loves:</span>
                <span className="value">{pet.likes.join(", ")}</span>
              </div>
              <div className="trait-row">
                <span className="label">Dislikes:</span>
                <span className="value">{pet.dislikes.join(", ")}</span>
              </div>
              {!isCandidate && (
                <div className="trait-row seeking-for">
                  <span className="label">Looking for:</span>
                  <span className="value">{pet.lookingFor}</span>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Candidate interaction buttons */}
      {isCandidate && (
        <div className="candidate-actions">
          <button className="expand-button" onClick={onToggleExpand}>
            {isExpanded ? "Hide Details" : "View Profile"}
          </button>
          {isExpanded && (
            <button className="select-button" onClick={onClick}>
              Choose This Match!
            </button>
          )}
        </div>
      )}
    </div>
  )

  return (
    <div className="mobile-game-container">
      {/* Start Screen */}
      {gameState === "start" && (
        <div className="mobile-screen start-screen">
          <div className="logo-container">
            <img
              src="/images/love-unleashed-logo.png"
              alt="Love Unleashed - Pet Matchmaking Game"
              className="main-logo"
            />
          </div>
          <div className="start-buttons">
            <button className="mobile-button play-button" onClick={startGame}>
              PLAY
            </button>
            <button className="mobile-button rules-button" onClick={() => setGameState("rules")}>
              RULES
            </button>
          </div>
        </div>
      )}

      {/* Rules Screen */}
      {gameState === "rules" && (
        <div className="mobile-screen rules-screen">
          <div className="rules-content">
            <div className="rules-section">
              <h3 className="rules-section-title">Game Overview</h3>
              <p className="rules-description">
                Help lonely pets find their perfect companions by matching them based on their personalities, likes, and
                what they're looking for in a partner. You have 2 rounds to prove your matchmaking skills!
              </p>
            </div>

            <div className="rules-section">
              <h3 className="rules-section-title">How to Play</h3>
              <div className="rules-list">
                <div className="rule-item">
                  <span className="rule-number">1</span>
                  <span className="rule-text">
                    Read the seeking pet's profile carefully to understand what they want
                  </span>
                </div>
                <div className="rule-item">
                  <span className="rule-number">2</span>
                  <span className="rule-text">
                    Click "View Profile" on potential matches to see their full personalities
                  </span>
                </div>
                <div className="rule-item">
                  <span className="rule-number">3</span>
                  <span className="rule-text">
                    Choose the best match based on shared traits, likes, and compatibility
                  </span>
                </div>
                <div className="rule-item">
                  <span className="rule-number">4</span>
                  <span className="rule-text">Earn points for great matches and become a Legendary Matchmaker!</span>
                </div>
              </div>
            </div>

            <div className="rules-section">
              <h3 className="rules-section-title">Scoring System</h3>
              <p className="rules-description">
                Each client is looking for 3 specific qualities in their perfect match. (What are they? That's for you
                to figure out!) For every quality that matches, you get 1 point. A perfect match has all 3 desired
                qualities.
              </p>
            </div>

            <div className="rules-section">
              <h3 className="rules-section-title">Rankings</h3>
              <div className="rankings-list">
                <div className="ranking-item legendary">
                  <span className="ranking-score">6 points</span>
                  <span className="ranking-title">Legendary Matchmaker</span>
                </div>
                <div className="ranking-item professional">
                  <span className="ranking-score">4-5 points</span>
                  <span className="ranking-title">Professional Paw Pairer</span>
                </div>
                <div className="ranking-item learning">
                  <span className="ranking-score">2-3 points</span>
                  <span className="ranking-title">Still Learning</span>
                </div>
                <div className="ranking-item beginner">
                  <span className="ranking-score">0-1 points</span>
                  <span className="ranking-title">Maybe Try a Goldfish...</span>
                </div>
              </div>
            </div>
          </div>

          <button className="mobile-button back-button" onClick={() => setGameState("start")}>
            BACK TO START
          </button>
        </div>
      )}

      {/* Game Screen */}
      {gameState === "playing" && seekingPet && (
        <div className="mobile-screen playing-screen">
          {/* Progress Bar */}
          <div className="progress-section">
            <div className="progress-info">
              <span>Round {currentRound}/2</span>
              <span>Score: {totalScore}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(currentRound / 2) * 100}%` }}></div>
            </div>
          </div>

          {/* Seeking Pet */}
          <div className="section">
            <h2 className="section-title">Client</h2>
            <MobilePetCard pet={seekingPet} isCandidate={false} />
          </div>

          {/* Candidates */}
          <div className="section">
            <h2 className="section-title">Potential Suitors</h2>
            <div className="candidates-stack">
              {candidates.map((candidate, index) => (
                <MobilePetCard
                  key={index}
                  pet={candidate}
                  isCandidate={true}
                  isExpanded={expandedCandidates.includes(index)}
                  onToggleExpand={() => toggleCandidateExpansion(index)}
                  onClick={() => selectMatch(candidate)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Result Screen */}
      {gameState === "result" && (
        <div className="mobile-screen result-screen">
          <div className="result-content">
            <div className="result-message">{resultMessage}</div>
            <div className="score-display">
              <div className="score-number">+{roundScore}</div>
              <div className="score-label">points</div>
            </div>
          </div>
          <button className="mobile-button primary" onClick={nextRound}>
            {currentRound >= 2 ? "Final Results" : "Next Round"}
          </button>
        </div>
      )}

      {/* Final Screen */}
      {gameState === "final" && (
        <div className="mobile-screen final-screen">
          <div className="final-content">
            <h2 className="final-title">Game Complete!</h2>
            <div className="final-score-display">
              <div className="final-score">{totalScore}</div>
              <div className="final-score-label">Total Points</div>
            </div>
            <div className="final-rating">{getFinalRating(totalScore)}</div>
          </div>
          <button className="mobile-button primary" onClick={startGame}>
            Play Again!
          </button>
        </div>
      )}

      <style jsx>{`
        .mobile-game-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding: 0;
          overflow-x: hidden;
        }

        .mobile-screen {
          padding: 20px 16px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .welcome-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          margin-bottom: 30px;
        }

        .welcome-text {
          font-size: 1.1rem;
          color: #333;
          line-height: 1.6;
          margin-bottom: 30px;
          padding: 0 10px;
        }

        .game-stats {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
        }

        .stat {
          background: rgba(255, 255, 255, 0.9);
          padding: 12px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #e91e63;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .progress-section {
          background: rgba(255, 255, 255, 0.9);
          padding: 16px;
          border-radius: 16px;
          margin-bottom: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
          font-size: 0.9rem;
        }

        .progress-bar {
          height: 6px;
          background: #f0f0f0;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #e91e63, #f06292);
          transition: width 0.3s ease;
        }

        .section {
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 1.3rem;
          color: #e91e63;
          text-align: center;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .mobile-pet-card {
          background: white;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
          position: relative;
        }

        .mobile-pet-card.candidate {
          cursor: default;
          border: 2px solid transparent;
        }

        .mobile-pet-card.candidate.expanded {
          border-color: #2196f3;
        }

        .mobile-pet-card.candidate:active {
          transform: scale(0.98);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .mobile-pet-card.seeking {
          background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
          border: 2px solid #ff9800;
        }

        .card-header {
          text-align: center;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #f0f0f0;
        }

        .pet-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 4px;
        }

        .pet-species {
          font-size: 0.95rem;
          color: #666;
          font-style: italic;
        }

        .card-content {
          space-y: 8px;
        }

        .trait-row {
          display: flex;
          align-items: flex-start;
          margin-bottom: 10px;
          font-size: 0.9rem;
        }

        .trait-row.seeking-for {
          background: rgba(233, 30, 99, 0.1);
          padding: 8px;
          border-radius: 8px;
          margin-top: 12px;
        }

        .label {
          font-weight: bold;
          color: #e91e63;
          margin-right: 8px;
          flex-shrink: 0;
          min-width: 80px;
        }

        .value {
          color: #555;
          line-height: 1.4;
        }

        .candidates-stack {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .start-buttons {
          position: absolute;
          bottom: 8%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          max-width: 200px;
          z-index: 2;
        }

        .mobile-button {
          width: 100%;
          padding: 16px 24px;
          border: none;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: auto;
        }

        .mobile-button.primary {
          background: linear-gradient(135deg, #e91e63 0%, #f06292 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(233, 30, 99, 0.3);
        }

        .mobile-button.primary:active {
          transform: translateY(1px);
          box-shadow: 0 2px 8px rgba(233, 30, 99, 0.4);
        }

        .result-screen, .final-screen {
          text-align: center;
          justify-content: center;
        }

        .result-content, .final-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 30px;
        }

        .result-message {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 24px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          line-height: 1.5;
        }

        .score-display {
          margin-bottom: 20px;
        }

        .score-number {
          font-size: 3rem;
          font-weight: 700;
          color: #e91e63;
        }

        .score-label {
          font-size: 1rem;
          color: #666;
        }

        .final-title {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 24px;
          font-weight: 700;
        }

        .final-score-display {
          margin-bottom: 24px;
        }

        .final-score {
          font-size: 4rem;
          font-weight: 700;
          color: #e91e63;
        }

        .final-score-label {
          font-size: 1.1rem;
          color: #666;
        }

        .final-rating {
          font-size: 1.3rem;
          color: #333;
          padding: 20px;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          border-radius: 16px;
          margin-bottom: 24px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
        }

        /* Safe area for notched phones */
        @supports (padding: max(0px)) {
          .mobile-header {
            padding-top: max(20px, env(safe-area-inset-top));
          }
          
          .mobile-screen {
            padding-bottom: max(20px, env(safe-area-inset-bottom));
          }
        }

        .pet-image-container {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }

        .pet-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #f0f0f0;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .pet-image.expanded-image {
          width: 200px;
          height: 200px;
          border-radius: 16px;
          margin-bottom: 8px;
        }

        /* Adjust positioning for specific characters to center their faces */
        .pet-image[alt="Dotty"] {
          object-position: center 35%;
        }

        .pet-image[alt="Frank"] {
          object-position: center 30%;
        }

        .mobile-pet-card.seeking .pet-image {
          border-color: #ff9800;
        }

        .mobile-pet-card.candidate .pet-image {
          border-color: #e91e63;
        }

        .mobile-pet-card.candidate .pet-image.expanded-image {
          border-color: #2196f3;
        }

        .candidate-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 16px;
          padding-top: 12px;
          border-top: 1px solid #f0f0f0;
        }

        .expand-button {
          background: linear-gradient(135deg, #2196f3 0%, #64b5f6 100%);
          color: white;
          border: none;
          padding: 12px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .expand-button:active {
          transform: scale(0.98);
        }

        .select-button {
          background: linear-gradient(135deg, #e91e63 0%, #f06292 100%);
          color: white;
          border: none;
          padding: 14px 16px;
          border-radius: 20px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(233, 30, 99, 0.3);
        }

        .select-button:active {
          transform: scale(0.98);
          box-shadow: 0 1px 4px rgba(233, 30, 99, 0.4);
        }

        .start-screen {
          background: transparent;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .logo-container {
          position: absolute;
          top: 0;
          left: 0;
          text-align: center;
          padding: 0;
          position: relative;
          overflow: hidden;
        }

        .logo-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }

        .main-logo {
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          object-position: center;
        }

        .start-buttons {
          position: absolute;
          bottom: 8%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          max-width: 200px;
          z-index: 2;
        }

        .play-button {
          background: linear-gradient(135deg, #e91e63 0%, #f06292 100%);
          color: white;
          font-size: 1.2rem;
          font-weight: 700;
          padding: 14px 24px;
          border: 2px solid white;
        }

        .play-button:hover {
          animation: wiggle 0.5s ease-in-out;
        }

        .rules-button {
          background: linear-gradient(135deg, #2196f3 0%, #64b5f6 100%);
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          padding: 12px 24px;
          border: 2px solid white;
        }

        .rules-button:hover {
          animation: wiggle 0.5s ease-in-out;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }

        @media (max-width: 480px) {
          .start-buttons {
            max-width: 180px;
            bottom: 6%;
          }
        }

        .rules-screen {
          background: linear-gradient(135deg, #e91e63 0%, #f06292 100%);
          color: white;
          padding: 20px 16px;
        }

        .rules-content {
          flex: 1;
          margin-bottom: 30px;
        }

        .rules-title {
          font-size: 2rem;
          color: white;
          text-align: center;
          margin-bottom: 30px;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .rules-section {
          margin-bottom: 30px;
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }

        .rules-section-title {
          font-size: 1.4rem;
          color: white;
          margin-bottom: 16px;
          font-weight: 700;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .rules-description {
          color: white;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
          opacity: 0.95;
        }

        .rules-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .rule-item {
          display: flex;
          align-items: flex-start;
          padding: 0;
          background: transparent;
          border-radius: 0;
          box-shadow: none;
        }

        .rule-number {
          background: white;
          color: #e91e63;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .rule-text {
          color: white;
          line-height: 1.5;
          font-size: 0.95rem;
          opacity: 0.95;
        }

        .rankings-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ranking-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
        }

        .ranking-item.legendary {
          background: rgba(255, 215, 0, 0.2);
        }

        .ranking-item.professional {
          background: rgba(255, 255, 255, 0.15);
        }

        .ranking-item.learning {
          background: rgba(33, 150, 243, 0.2);
        }

        .ranking-item.beginner {
          background: rgba(158, 158, 158, 0.2);
        }

        .ranking-score {
          background: white;
          color: #e91e63;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 6px 12px;
          border-radius: 16px;
          min-width: 80px;
          text-align: center;
        }

        .ranking-title {
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
          opacity: 0.95;
        }

        .back-button {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid white;
          backdrop-filter: blur(10px);
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.3);
          animation: wiggle 0.5s ease-in-out;
        }

        .playing-screen {
          min-height: 100vh;
          padding-top: 20px;
        }

        .pet-bio {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          text-align: center;
          padding: 16px;
          background: rgba(233, 30, 99, 0.05);
          border-radius: 12px;
          font-style: italic;
        }
      `}</style>
    </div>
  )
}
