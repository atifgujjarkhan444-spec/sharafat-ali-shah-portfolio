import PageHero from '../components/PageHero';

export default function About(){
	return <>
		<PageHero title="About Us"/>
		<section className="container about">
			<div>
				<span className="eyebrow">Hakeem Syed Sharafat Ali Shah</span>
				<h2>A traditional course for men&apos;s vitality and confidence.</h2>
				<p>This complete course combines an herbal oil, tablets and a traditional amber-based preparation. It is presented for men seeking support for vitality, energy and intimate wellbeing.</p>
				<p>The course is described as a 15-20 day initial treatment within a one-month program. Traditional ingredients are prepared with care, and recommended use is discussed individually with each customer.</p>
				<p>Claims about size, firmness, stamina or sexual performance are not guaranteed and can vary from person to person. Please consult a qualified healthcare professional before using any herbal or sexual-health product, especially if you take medication or have an existing condition.</p>
			</div>
			<img src="/images/profile-1.png" alt="Hakeem Syed Sharafat Ali Shah"/>
		</section>
	</>
}
