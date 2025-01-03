
"use client"
import {IPortfolioItem} from "@/shared/types/portfolio.interface";
import {Card,CardHeader,CardContent,CardFooter, CardTitle} from "@/components/ui/card";
import ImagesGallery from "@/components/ui/Custom/ImagesGallery/ImagesGallery";
import styles from './PortfolioModal.module.scss'

interface PortfolioModalProps {
    portfolioItem: IPortfolioItem
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({portfolioItem}) => {

   return (
        <div>
            <Card className={styles.cardWrapper}>
                <CardHeader>
                    <CardTitle>{portfolioItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className={styles.cardContent}>
                        <div className={styles.cardImages}>
                            <ImagesGallery images={portfolioItem.images}/>
                        </div>
                        
                        <div className={styles.cardDesc}>
                            <h1>Описание:</h1>
                            {portfolioItem.description.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
};

export default PortfolioModal;