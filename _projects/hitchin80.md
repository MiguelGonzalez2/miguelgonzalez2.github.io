---
layout: page
title: Bruhat graph sculptures
description: Nigel Hitchin's 80th birthday present
importance: -1
img: assets/img/hitchin80/sideways.jpeg
category: Maths
related_publications: false
images:
  slider: true
---

## Overview

On the occasion of [Nigel Hitchin](https://en.wikipedia.org/wiki/Nigel_Hitchin)'s 80th birthday, [Tamás Hausel](https://hausel.ista.ac.at/) and I designed a custom present consisting of coloured sculptures of the [Bruhat graphs](https://hausel.ista.ac.at/~thausel/zoo/gkm/) for the rank 2 coroot lattices. These were entirely 3D-printed using a [Stratasys J750](https://www.stratasys.com/en/resources/blog/j750-3d-printer-introduction/) printer at [ISTA](https://www.ista.ac.at/en/home/) with the help of [Todor Asenov](https://research-explorer.ista.ac.at/person/4D14DC10-F248-11E8-B48F-1D18A9856A87), and the project's 3D object files were generated using [Mathematica](https://www.wolfram.com/mathematica/), the code for which was provided by [Gemini](https://gemini.google.com) 3.1 Pro from a mathematical description of the desired outcome. The sculptures have a base sidelength of 6.5cm and a height of 8.1cm. The printing materials are [Vero](https://www.stratasys.com/en/materials/materials-catalog/polyjet-materials/vero/) resins including the transparent [VeroUltraClear](https://www.stratasys.com/en/materials/materials-catalog/polyjet-materials/veroultraclear/). Tamás and I delivered the present at [ICMAT](https://www.icmat.es/)'s [Geometry conference in honour of Nigel Hitchin on the occasion of his 80th birthday](https://www.icmat.es/RT/2026/HNLTT/hitchin80.php).

In this page we will briefly explain some of the mathematics behind the present as well as its connection to Nigel Hitchin's work.

## Pictures

<style>
swiper-container.hitchin-carousel {
  display: block;
  width: 100%;
  height: 560px;

  --swiper-navigation-color: white;
  --swiper-navigation-size: 24px;
}

swiper-container.hitchin-carousel:not(:defined) {
  visibility: hidden;
}

swiper-container.hitchin-carousel swiper-slide {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

swiper-container.hitchin-carousel swiper-slide figure {
  margin: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

swiper-container.hitchin-carousel swiper-slide picture {
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
}

swiper-container.hitchin-carousel swiper-slide img {
  display: block;

  width: auto !important;
  height: auto !important;

  max-width: 100%;
  max-height: 100%;

  object-fit: contain;
}

swiper-container.hitchin-carousel::part(button-prev),
swiper-container.hitchin-carousel::part(button-next) {
  background: rgba(0, 0, 0, 0.55);
  border-radius: 50%;
  width: 42px;
  height: 42px;
  padding: 8px;
}

@media (max-width: 768px) {
  swiper-container.hitchin-carousel {
    height: 70vw;
    max-height: 400px;
    min-height: 240px;
  }

  swiper-container.hitchin-carousel::part(button-prev),
  swiper-container.hitchin-carousel::part(button-next) {
    width: 34px;
    height: 34px;
    padding: 6px;
  }
}
</style>

<swiper-container
class="hitchin-carousel"
navigation="true"
pagination="true"
loop="true"
autoplay="true"
autoplay-delay="4000"
autoplay-disable-on-interaction="true"

>

  <swiper-slide>
    {% include figure.liquid
      loading="eager"
      path="assets/img/hitchin80/front.jpeg"
      class="img-fluid rounded"
    %}
  </swiper-slide>

  <swiper-slide>
    {% include figure.liquid
      loading="eager"
      path="assets/img/hitchin80/top.jpeg"
      class="img-fluid rounded"
    %}
  </swiper-slide>

  <swiper-slide>
    {% include figure.liquid
      loading="eager"
      path="assets/img/hitchin80/sideways.jpeg"
      class="img-fluid rounded"
    %}
  </swiper-slide>

  <swiper-slide>
    {% include figure.liquid
      loading="eager"
      path="assets/img/hitchin80/present.jpeg"
      class="img-fluid rounded"
    %}
  </swiper-slide>

</swiper-container>

<br/>

## Bruhat graphs and their GKM interpretation

Each sculpture depicts the Bruhat graph of a simple rank $2$ [coroot lattice](https://en.wikipedia.org/wiki/Root_system), for types $A_2$ (red), $B_2$ (blue) and $G_2$ (green), respectively; the blue one depicts equivalently the graph for the root lattice of type $C_2$. For an abstract [Coxeter system](https://en.wikipedia.org/wiki/Coxeter_group), this graph has the group elements as its vertices and the pairs of elements that differ by a reflection as its edges (technically, edges should also be oriented according to the [Bruhat order](https://en.wikipedia.org/wiki/Bruhat_order)). The coroot lattice is a parabolic quotient of the [affine Weyl group](https://en.wikipedia.org/wiki/Coxeter_group#Affine_Coxeter_groups), which has the structure of a Coxeter system, so a Bruhat graph can be defined similarly. Since affine reflections act on a given element of the lattice by translating it by an integer multiple of a coroot, in this setting the graph can be described as follows.

- Vertices: elements of the coroot lattice.
- Edges: exist between any two vertices that differ by a multiple of a coroot in the lattice.

These graphs are precisely the [GKM graphs](https://en.wikipedia.org/wiki/GKM_variety) for the action of a maximal torus (acting by left multiplication) times $\mathbb C^\times$ (acting by loop rotation) on the [affine Grassmannian](https://en.wikipedia.org/wiki/Affine_Grassmannian) for the simply connected complex group of the corresponding type. This means that the vertices correspond to the fixed points of said action and the edges represent the one-dimensional orbits, connecting the two fixed points that appear in their closures. For completeness, as a GKM graph, edges should also be labelled by the weight in the tangent space at one of the two fixed points that corresponds to the one-dimensional orbit: in this case the edge connecting a coroot $\lambda$ with $\lambda + k \cdot \beta$, where $k \le 0$ and $\beta$ is a positive coroot, has weight $(\beta, k+\lambda(\beta^\vee))$ where the first entry lies in the Lie algebra of the maximal torus and the second in that of $\mathbb C^\times$. These labels are called the _axial function_ of the GKM graph. All this combinatorical data allows to understand the equivariant cohomology for this torus action. You can interactively explore these graphs in [this viewer](https://hausel.ista.ac.at/~thausel/zoo/gkm/) built by Tamás.

As a fun fact, the top view of the graph (i.e. its projection to the coroot lattice) results in the [Delaunay triangulation](https://en.wikipedia.org/wiki/Delaunay_triangulation) of said lattice.

## Moment polytopes

This project was originally inspired by [Atiyah](https://en.wikipedia.org/wiki/Michael_Atiyah) and [Pressley](https://kclpure.kcl.ac.uk/portal/en/persons/andrew-pressley/)'s [work](https://link.springer.com/chapter/10.1007/978-1-4757-9286-7_3) on the moment map for the torus action on based loop groups, which is in a sense the topological/symplectic analogue of the GKM picture explained above. Instead of considering the affine Grassmannian for the corresponding simply connected complex group, one considers the based loop group of its maximal compact subgroup $K$ (i.e. the group of identity-preserving smooth maps from $\mathbb S^1$ to $K$). This carries an action of $K \times \mathbb S^1$, which Atiyah and Pressley showed to be Hamiltonian. Moreover, they prove that the moment map, which takes values in the sum of the Lie algebra of $K$ and $\mathbb R = \mathrm{Lie}(\mathbb S^1)$, has as its image the convex polytope encolsing the points given as the values of the moment map at the coroots (seen as based loops in $K$). Some beautiful pictures of these polytopes appear in the aforementioned paper, for example, this one on page 56 depicts the type $A_2$ case i.e. $K=\mathrm{SU}(3)$:

{% include figure.liquid loading="eager" path="assets/img/hitchin80/polytope.png" class="limit-height rounded z-depth-1" %}

We first considered these moment polytopes for the present, with some prototypes as can be seen in the following pictures.

<swiper-container
class="hitchin-carousel"
navigation="true"
pagination="true"
loop="true"
autoplay="true"
autoplay-delay="4000"
autoplay-disable-on-interaction="true"

>

  <swiper-slide>
    {% include figure.liquid
      loading="eager"
      path="assets/img/hitchin80/moment.jpeg"
      class="img-fluid rounded"
    %}
  </swiper-slide>

  <swiper-slide>
    {% include figure.liquid
      loading="eager"
      path="assets/img/hitchin80/printing.jpeg"
      class="img-fluid rounded"
    %}
  </swiper-slide>

</swiper-container>

<br/>

Interestingly, the 3d-printer could not handle the first prototype we gave it --- it must have preferred the algebro-geometric interpretation with the Bruhat graphs.

{% include figure.liquid loading="eager" path="assets/img/hitchin80/melt.png" class="limit-height rounded z-depth-1" %}

In the final sculptures, we kept this idea for the vertex arrangement: the position of each vertex is determined by its image via the moment map (since it takes values in a three-dimensional space). Similarly, the chosen value in the colour gradient at each point of the sculpture is determined by the $\mathbb R = \mathrm{Lie}(\mathbb S^1)$ component of the image via the moment map, called _energy function_ by Atiyah and Pressley.

## The tip of the iceberg of the Hitchin system

The previous graph also appears naturally when studying the _top components_ of the $\mathbb C^\times$-fixed point locus in the Higgs bundle moduli space, i.e. those components whose Higgs bundles have generically regular Higgs field. This study was pioneered in [this work](https://link.springer.com/article/10.1007/s00222-021-01093-7) of Tamás and Nigel, and was generalised using the affine Grassmannian approach to arbitrary structure groups in [my work](https://arxiv.org/abs/2503.01289) as part of my PhD studies. I talked about this in my talk during the conference, you can find out more information such as the slides in my [research page](/publications).

Shortly, one can understand the flows for the $\mathbb C^\times$-action in the nilpotent cone of the Hitchin system by performing successive Hecke transformations at given points in the base curve. Within the top components, everything can be understood in this way, and the spaces of Hecke transformations (which are affine Springer fibres in the affine Grassmannian) have their $\mathbb C^\times$-flows described by the sculptures we printed. Thus, roughly speaking, vertices of the graph correspond to the fixed points of the $\mathbb C^\times$-action in these top components that differ only locally around the same base point in the curve. An edge between two fixed points indicates that one can flow from one to the other within the nilpotent cone via a $\mathbb C^\times$-orbit.

## Farewell

This was a very fun project, not only because of the satisfaction of seeing it completed and delivered to Nigel but also because it allowed me to learn many new interesting mathematics, even including some that improved my understanding of my PhD thesis problem, which is something I definitely did not expect to happen when we started with this idea. As a final tribute to Nigel's influence, here is a picture we took with him --- these are (most of) his Madrid-based, PhD student academic descendants!

{% include figure.liquid loading="eager" path="assets/img/hitchin80/descendants.png" class="limit-height rounded z-depth-1" zoomable=true %}

<br/>

_Originally posted on: Sep. 25, 2026_

_Last updated: Sep. 26, 2026_
