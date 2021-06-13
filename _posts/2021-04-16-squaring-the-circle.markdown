---
layout: post
title: Squaring the circle
permalink: /posts/squaring-the-circle
date: 2021-04-16 18:00:00
---

Mathematics is an active discipline! Whenever you see a question written in this style, I encourage that you attempt to solve it! Clicking the question will reveal the answer.
{: class="exercisetoggledummy" style="margin-bottom:30px;"}

When someone tries to _square the circle_, it means that they are trying to accomplish a seemingly impossible feat. But what is this circle squaring all about, and is it really that difficult? In this blog post we're going to explore this beautiful math problem that stumbled the ancient greeks, and we will show how the concept of _field extensions_ provides a beautiful answer.

### The problem

We start with a given circle of area $$A$$, and the goal is to obtain a square with the same area $$A$$.

![Description of the problem]({{site.base_url}} {% link images/posts/squaring-the-circle/problem.png %})
{: style="width: 700px; margin-left: auto; margin-right: auto; display:block;"}

But this should be easy! If the first circle has radius $$r$$, then the area is $$A = \pi r^2$$, and so we just need a square with side length $$l = \sqrt{\pi}r$$, so that $$l^2 = A$$, right? It turns out the problem is not so simple, as there are some rules on what lengths are we allowed to construct.

### The rules

Ancient greeks wondered if one could obtain the desired square by _only using ruler and compass_. This means that, from a given set of points (in this case, the center of the circle and a point on the circle itself, so that their distance is the radius), we can only construct some of the remaining points in the plane (hopefully, the desired square vertices). So, what exactly are we allowed to do? Let's suppose we start with just these two points in the plane:

![Starting points]({{site.base_url}} {% link images/posts/squaring-the-circle/starting_points.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

One of the two points has been assigned the role of the _origin point_, and identified with $$(0,0)$$, and the other one serves as a way of defining a _unit length_, which is the distance between the two points. We then are allowed to perform the following operations:

- **Ruler operation**: Given two points, trace the straight line that passes through them.
- **Compass operation**: Given three points, $$P$$, $$Q$$ and $$R$$, trace the circumference centered at $$P$$ with radius the distance between $$Q$$ and $$R$$.

With these two operations, **any intersection point of straight lines and/or circumferences we can trace becomes part of our working point collection.** If we start with the two aforementioned points, what can we reach? Can we get the vertices of the desired square? We'll dive into the answer step by step.

### Building the constructible points

The first points that we can secure are those on the $$X$$ axis that have an integer coordinate. That is, points of the form $$(n,0)$$ where $$n \in \mathbb{Z}$$. All we need to do is trace the $$X$$ axis by using our ruler with the starting points, and then, construct a circumference of unit radius centered at $$(1,0)$$. This circumference will produce $$(2,0)$$, and we can keep iterating this process to get every point:

![Constructing the integers]({{site.base_url}} {% link images/posts/squaring-the-circle/buildingz.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

As such, we obtain any integer distance $$z \in \mathbb{Z}$$, between points $$(0,0)$$ and $$(z,0)$$. However, we still face two major problems: for the desired square, we'd want a non-integer distance to appear (remember, the side length needs to be $$l = \sqrt{\pi}r$$), and we've yet to obtain a point that's not snapped to the X-axis. This second problem is actually easy to solve:

![First 2d point]({{site.base_url}} {% link images/posts/squaring-the-circle/first2dpoint.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

As you can see, by tracing a unit circle centered at $$(0,0)$$, and another at $$(1,0)$$, they intersect at two new points that neither have an integer distance with the origin, nor lie on the $$X$$-axis. 

Notice that the three marked points in the previous figure form an equilateral triangle. Can you figure out the coordinates of our new point? What is its distance to the origin?
{: class="exercisetoggle"}
The points form a unit-sided equilateral triangle. Hence, the coordinates for the new point need to be $$(\cos \frac{\pi}{3}, \sin \frac{\pi}{3}) = (\frac{1}{2}, \frac{\sqrt 3}{2})$$. Another way of solving this is to realize that the point will have the form $$(\frac{1}{2},y)$$, since it lies in the perpendicular bisector of the segment formed by the other two, and then forcing the distance from this point to the origin to be $$1$$. Obviously, this new point is at distance $$1$$ from the origin, since it lies on the unit circumference centered at $$(0,0)$$.
{: class="exercisesolution"}

### "Parallelizing"

Our quest to reach the largest possible amount of points has to take a quick detour to gather the necessary tools that will allow the search to continue. We're going to see how to obtain parallel and perpendicular lines. Firstly, given two points $$Q_1$$ and $$Q_2$$ that form a line $$l$$, and a third point $$P$$, we want the parallel to $$l$$ through $$P$$, that is, a second point $$P'$$ such that the line connecting $$P$$ and $$P'$$ is parallel to $$l$$. We start by tracing a circumference of radius $$\overline{Q_1Q_2}$$ centered at $$P$$:

![First step of the parallel]({{site.base_url}} {% link images/posts/squaring-the-circle/parallelstep1.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

Now, we trace a circumference of radius $$\overline{PQ_1}$$ centered at $$Q_2$$:

![Second step of the parallel]({{site.base_url}} {% link images/posts/squaring-the-circle/parallelstep2.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

They intersect at $$P'$$ with the desired properties!

![Third step of the parallel]({{site.base_url}} {% link images/posts/squaring-the-circle/parallelstep3.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

Visually, it is clear that the new line is parallel to the previous one. Will this always be true?
{: class="exercisetoggle"}
Yes! Notice that, since $$P'$$ lies on the circumference centered at $$P$$ and with radius $$\overline{Q_1Q_2}$$, then $$\overline{PP'} = \overline{Q_1Q_2}$$. But also, since it lies on the circumference centered at $$Q_2$$ with radius $$\overline{PQ_1}$$, then $$\overline{PQ_1}$$ = $$\overline{P'Q_2}$$, so opposite side lenghts are equal and then $$P, P', Q_1, Q_2$$ form a parallelogram, whose sides are parallel.
{: class="exercisesolution"}

The perpendicular to $$l$$ through $$P$$ is actually very easy. We just need the typical construction of the perpendicular bisector:

![Perpendicular]({{site.base_url}} {% link images/posts/squaring-the-circle/perpendicular.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

If $$P$$ doesn't lie on the perpendicular bisector, then just use the previously explained parallel procedure to shift it!

### The field of constructible numbers

So far, we've been talking about constructible _points_, which were those that could be obtained from the origin and the unit point. However, thanks to the results derived in the previous section, it doesn't really matter if we consider _points_ or _numbers_. For example if you can reach point $$P = (x,y)$$, then you can obtain $$x$$ itself (that is, the point $$(x,0)$$) by tracing a parallel to the $$Y$$ axis through $$P$$ and letting it intersect the $$X$$ axis.

Similarly, given points $$x$$ and $$y$$ which are constructible (again, this means one can obtain the points $$(x,0)$$ and $$(y,0)$$), you can trace a circumference with radius $$y$$ centered at the origin and let it intersect the $$Y$$ axis to get $$(0,y)$$. With the appropriate usage of parallel lines, the point $$(x,y)$$ is then retrieved:

![Coordinate_lifting]({{site.base_url}} {% link images/posts/squaring-the-circle/lifting.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

But wait! So far we had just constructed points in the $$X$$ axis. It would be illegal to use the $$Y$$ axis like we just did, since we didn't get any point from said axis in the first place. Can you explain a way of constructing such a point, so that we can use it?
{: class="exercisetoggle"}
Since we already have the horizontal axis, and we know taking perpendiculars can be done, simply trace a perpendicular to the $$X$$ axis through the origin. There are, of course, many other valid explanations.
{: class="exercisesolution"}

This means that we can make our life easier by establishing the following definition: a number is **constructible** if and only if it's any component of a constructible point (starting from $$(0,0)$$ and $$(1,0)$$). We'll denote this set of numbers as $$\mathcal C$$. Constructible numbers and points are essentially the same, but it will be easier to work in one dimension. Note that $$\mathcal C \subset \mathbb R$$, although we don't know yet whether they are the same.

In order to use the powerful tools of algebra with our problem, we're going to show some key properties of $$\mathcal C$$. This set, along with the usual sum ($$+$$) and product ($$\cdot$$) operations, has a **field** structure. This means that certain operations are preserved. Let's take a look at them with visual proofs.

Firstly, there are neutral elements for both operations, that is, elements such that, when summed or multiplied with another number, leave said number unmodified. They are, of course $$0$$ (for the sum) and $$1$$ (for the product), and them being constructible is the very first thing we established.

Secondly, the sum of constructible numbers is again constructible, and the same goes for the difference:

![sum_and_difference]({{site.base_url}} {% link images/posts/squaring-the-circle/sumdiff.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

Same goes for the product. Here we show the construction, which cleverly uses [Thales's Theorem](https://en.wikipedia.org/wiki/Thales%27s_theorem):

![product]({{site.base_url}} {% link images/posts/squaring-the-circle/prod.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

This same construction with a minor modification yields the multiplicative inverse:

![inverse]({{site.base_url}} {% link images/posts/squaring-the-circle/inverse.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

With all these properties, as well as _associativity_ and _distributivity_, which are automatically inherited from operations in $$\mathbb R$$, we can conclude that $$\mathcal C$$ is a [field](https://en.wikipedia.org/wiki/Field_(mathematics)), as desired.

If you pay close attention to the last two figures, you'll see that in order to apply Thales's Theorem, we need the involved numbers to be positive ($$a,b > 0$$). Can you explain why multiplication and inverse work in general, even if the values are not both positive? You should be able to do this without any crazy construction, only with everything discussed so far.
{: class="exercisetoggle"}
Suppose, for example, that $$a < 0$$ and $$b > 0$$. Then, using Thales's Theorem we can get $$(-a)b$$, but this is the same as $$-ab$$. Then, you can do $$0 - (-ab) = ab$$ to finish it off, since the case of the difference has already been proven in general. The case where both are negative is even easier, and the same goes for the inverse. Finally, if any of the numbers is $$0$$, the product is $$0$$ which is in $$\mathcal C$$.
{: class="exercisesolution"}

In previous sections we saw that every integer could be constructed, that is, $$\mathbb Z \subset \mathcal C$$. It turns out that the smallest field that contains the integers is the rationals (can you see why with the properties discussed?), which automatically gives $$\mathbb Q \subset \mathcal C$$. In other words, any point of _rational_ coordinates can be constructed. That's a lot!

Let's wrap up this section with one last crucial property of $$\mathcal C$$. Given the _compass rule_, it makes sense that if a point $$(a,b)$$ can be constructed, then so can its distance to the origin (the number $$\sqrt{a^2+b^2}$$). The way to do this is the obvious one (with a circumference centered at $$(0,0)$$ and intersecting the $$X$$ axis). This allows non-rational numbers to be constructible: for example, $$\sqrt{2}$$ is the distance of $$(1,1)$$ to the origin. It turns out that **the square root of any positive, constructible number is also constructible**, and the classical construction for this is the following:

![square_root]({{site.base_url}} {% link images/posts/squaring-the-circle/sqrt.png %}) 
{: style="width: 400px; margin-left: auto; margin-right: auto; display:block;"}

Equipped with the knowledge that $$\mathcal C$$ is a field where taking the square root is preserved, we are ready to prove that squaring the circle is impossible!

[Back to the main page.]({% link index.markdown %})


