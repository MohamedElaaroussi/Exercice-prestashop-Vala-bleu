// src/Repository/MobileRepository.php
<?php

namespace VMobile\Repository;

use Doctrine\ORM\EntityRepository;
use VMobile\Entity\Mobile;

class MobileRepository extends EntityRepository
{
    public function findLatestMobiles(int $limit = 10)
    {
        return $this->createQueryBuilder('m')
            ->orderBy('m.id', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
}