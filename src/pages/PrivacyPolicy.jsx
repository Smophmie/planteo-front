import HeroSection from "../components/HeroSection";

function PrivacyPolicy() {

    return <>
        <HeroSection title="Politique de confidentialité"/>
        <div className="m-16">
            <p className="my-3">
                La protection de vos données personnelles est une priorité pour nous. Cette charte de protection des données personnelles a pour but de vous informer sur la manière dont nous collectons, utilisons et protégeons vos données personnelles.
            </p>

            <h2 className='text-3xl'>Responsable du traitement</h2>

            <p className="my-3">
                Le responsable du traitement des données personnelles collectées sur le site est Sophie Théréau, domiciliée au 119 rue du Fangheat - 63160 Egliseneuve-près-Billom, joignable par mail à l'adresse sophiethereau@hotmail.fr.
            </p>

            <h2 className='text-3xl'>Données collectées</h2>

            <p className="my-3">
                Nous collectons les données suivantes :
            </p>
            <ul class="list-disc mb-3 ml-8">
                <li>Données d'identification : nom, prénom, adresse e-mail, numéro de téléphone.</li>
                <li>Données de connexion : adresse IP, logs de connexion, type de navigateur, etc.</li>
                <li>Données de navigation : pages visitées, durée de la visite, liens cliqués, etc.</li>
            </ul>

            <h2 className='text-3xl'>Finalités du traitement</h2>

            <p className="my-3">
                Vos données personnelles sont collectées pour les finalités suivantes :
            </p>
            <ul class="list-disc mb-3 ml-8">
                <li>Gestion des inscriptions et des comptes utilisateurs.</li>
                <li>Amélioration de l'expérience utilisateur sur le site.</li>
                <li>Réalisation de statistiques et analyses de performance du site.</li>
                <li>Respect des obligations légales et réglementaires.</li>
            </ul>

            <h2 className='text-3xl'>Base légale du traitement</h2>

            <p className="my-3">
                Nous traitons vos données personnelles sur les bases légales suivantes :
            </p>
            <ul class="list-disc mb-3 ml-8">
                <li>Exécution du contrat : pour la gestion de votre compte utilisateur.</li>
                <li>Intérêt légitime : pour l'amélioration du site et la réalisation de statistiques.</li>
                <li>Obligation légale : pour le respect des obligations légales et réglementaires.</li>
            </ul>
            
            <h2 className='text-3xl'>Destinataires des données</h2>

            <p className="my-3">
                Vos données personnelles peuvent être communiquées aux destinataires suivants :
            </p>
            <ul class="list-disc mb-3 ml-8">
                <li>Les services internes de Planteo.</li>
                <li>Les prestataires externes et sous-traitants (hébergeurs, etc.).</li>
                <li>Les autorités légales et réglementaires, si la loi l'exige.</li>
            </ul>

            <h2 className='text-3xl'>Durée de conservation</h2>

            <p className="my-3">
                Nous conservons vos données personnelles pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées, sauf obligation légale contraire.
            </p>
            
            <h2 className='text-3xl'>Droits des utilisateurs</h2>

            <p className="my-3">
                Vous disposez des droits suivants concernant vos données personnelles :
            </p>

            <ul class="list-disc mb-3 ml-8">
                <li>Droit d'accès : obtenir la confirmation que vos données sont traitées et accéder à celles-ci.</li>
                <li>Droit de rectification : demander la correction de vos données si elles sont inexactes ou incomplètes.</li>
                <li>Droit à l'effacement : demander la suppression de vos données sous certaines conditions.</li>
                <li>Droit à la limitation du traitement : demander la limitation du traitement de vos données dans certains cas.</li>
                <li>Droit d'opposition : vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière.</li>
                <li>Droit à la portabilité : recevoir vos données dans un format structuré et couramment utilisé, ou les transmettre à un autre responsable de traitement.</li>
            </ul>

            <p className="my-3">Pour exercer vos droits, vous pouvez écrire à l'adresse sophiethereau@hotmail.fr.</p>

            <h2 className='text-3xl'>Sécurité des données</h2>

            <p className="my-3">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction, la perte, l'altération, la divulgation ou l'accès non autorisé.
            </p>

            <h2 className='text-3xl'>Modification de la charte</h2>

            <p className="my-3">
                Nous pouvons être amenés à modifier la présente Charte de temps à autre. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé des éventuelles modifications.
            </p>

            <h2 className='text-3xl'>Contact</h2>

            <p className="my-3">
                Pour toute question ou demande concernant cette Charte ou vos données personnelles, vous pouvez écrire à sophiethereau@hotmail.fr.
            </p>
        </div>
    </>
}

export default PrivacyPolicy